import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  isFavorite = false;
  isSelected = false;
  public id: number;
  public reviews;
  showLoading: boolean;
  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: number;

  public productDetails = [];
  public productData = [];
  public config = [];
  public recommendedProducts = [];
  public quantityList = [
    { type: '20 ML', price: '$24.99' },
    { type: '50 ML', price: '$34.99' },
    { type: '100 ML', price: '$54.99' },
  ];

  constructor(
    public productService: ProductService,
    private route: ActivatedRoute,
    private cartService: CartService
  ) {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
  }

  public shopCategory = [
    {
      date: 'All Natural Ingredients.',
      des: '$24.99',
      category: 'FOOD & LIFESTYLE',
      img: 'https://images.freeimages.com/images/large-previews/85a/daisy-s-1375598.jpg',
    },
    {
      date: 'All Natural Ingredients.',
      des: '$24.99',
      category: 'Healthcare',
      img: 'https://images.freeimages.com/images/large-previews/85a/daisy-s-1375598.jpg',
    },
    {
      date: 'All Natural Ingredients.',
      des: '$24.99',
      category: 'LIFESTYLE',
      img: 'https://images.freeimages.com/images/large-previews/85a/daisy-s-1375598.jpg',
    },
    {
      date: 'All Natural Ingredients.',
      des: '$24.99',
      category: 'FOOD & LIFESTYLE',
      img: 'https://images.freeimages.com/images/large-previews/85a/daisy-s-1375598.jpg',
    },
  ];

  ngOnInit(): void {
    if (this.id) {
     this.showProductDetail();
     this.getRecommendedProducts();
     this.showProductReview();
    }

  }

  countStar(star) {
    this.selectedValue = star;
  }
  addtocart(item: any) {
    this.cartService.addtoCart(item);
  }
  onClick() {
    this.isFavorite = !this.isFavorite;
  }

  onSelected() {
    this.isSelected = !this.isSelected;
  }

  showProductDetail() {
    this.showLoading = true;
    if (this.id) {
      this.productService.getProductDetail(this.id).subscribe((response) => {
        if (response) {
          this.countStar(response.average_rating)
          this.productData = response;
          this.config = response.meta_data;
          this.showLoading = false;
        } else {
          this.showLoading = true;
        }
      });
    }
  }
  myFunction() {
    let dots = document.getElementById('dots');
    let moreText = document.getElementById('more');
    let btnText = document.getElementById('myBtn');

    if (dots.style.display === 'none') {
      dots.style.display = 'inline';
      btnText.innerHTML = 'Read more';
      moreText.style.display = 'none';
    } else {
      dots.style.display = 'none';
      btnText.innerHTML = 'Read less';
      moreText.style.display = 'inline';
    }
  }

  isItemSelected(item) {
    return this.config.indexOf(item) < 0 ? false : true;
  }

  truncateChar(text: string): string {
    let charlimit = 50;
    if (!text || text.length <= charlimit) {
      return text;
    }

    let without_html = text.replace(/<(?:.|\n)*?>/gm, '');
    let shortened = without_html.substring(0, charlimit) + '...';
    return shortened;
  }

  truncateRecommendedChar(text: string): string {
    let charlimit = 10;
    if (!text || text.length <= charlimit) {
      return text;
    }

    let without_html = text.replace(/<(?:.|\n)*?>/gm, '');
    let shortened = without_html.substring(0, charlimit) + '...';
    return shortened;
  }
  getRecommendedProducts() {
    this.showLoading = true;
    this.productService.getAllProductList().subscribe((response) => {
      if (response.length > 0) {
        for (let x = 0; x < 4; x++) {
          if (response[x]) {
            this.recommendedProducts.push({
              id: response[x]['id'],
              name: response[x]['name'],
              short_description: response[x]['short_description'],
              image: response[x]['images'][0],
              price: response[x]['price'],
            });
            this.showLoading = false;
          } 
        }
      }else {
        this.showLoading = true;
      }
    });
  }

  showProductReview(){
    this.productService.getProductReview( this.id).subscribe((response) => {
      this.reviews = response;
    })
  }
 
}
