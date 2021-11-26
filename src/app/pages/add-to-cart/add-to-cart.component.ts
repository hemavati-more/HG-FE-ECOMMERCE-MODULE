import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css'],
})
export class AddToCartComponent implements OnInit {
  public cartCategory = [
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

  public products = [];
  public recommendedProducts = [];
  public grandTotal!: number;
  public showLoading: boolean;
  public totalProduct;

  constructor(
    private cartService: CartService,
    public productService: ProductService
  ) {}
  public cartItemList: any = [];

  ngOnInit(): void {
    this.getProductData();
    this.getRecommendedProducts();
  }

  addItem(product: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (product[index].id === a.id) {
        this.cartItemList.splice(index, 1);
      }
    });
    this.products = this.cartItemList;
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
      } else {
        this.showLoading = true;
      }
    });
  }

  getProductData() {
    this.cartService.getProducts().subscribe((res) => {
      if (res) {
        for (let i = 0; i < res.length; i++) {
          this.products.push({
            id: res[i].id,
            name: res[i].name,
            image: res[i]['images'][0]['src'],
            price: res[i].price,
            des: res[i].short_description,
            sale_price: res[i].sale_price,
          });
        }
        this.totalProduct = this.products.length;
        this.grandTotal = this.cartService.getTotalPrice();
      } else {
      }
    });
  }
  removeItem(item: any) {
    this.products = [];
    this.cartService.removeAllCart();
  }
  emptycart() {
    this.cartService.removeAllCart();
  }

  addtocart(item: any) {
    this.cartService.getProducts().subscribe((res) => {
      this.totalProduct = res.length;
    });
    this.cartService.addtoCart(item);
    item.map((a: any) => {
      this.grandTotal += parseInt(a.price);
    });
    this.grandTotal = this.grandTotal;
  }

  truncateChar(text: string): string {
    let charlimit = 15;
    if (!text || text.length <= charlimit) {
      return text;
    }

    let without_html = text.replace(/<(?:.|\n)*?>/gm, '');
    let shortened = without_html.substring(0, charlimit) + '...';
    return shortened;
  }
}
