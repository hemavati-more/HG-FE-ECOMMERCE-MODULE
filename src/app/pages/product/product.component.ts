import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  public filterByList = [];
  public showProducts = [];
  public searchText = '';
  toggle: boolean = true;
  public showLoading: boolean;

  constructor(public productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.showLoading = true;
    this.productService.getAllProductList().subscribe((response) => {
      if (response.length > 0) {
        for (let x = 0; x <= response.length; x++) {
          if (response[x]) {
            this.showProducts.push({
              id: response[x]['id'],
              name: response[x]['name'],
              short_description: response[x]['short_description'],
              image: response[x]['images'][0],
              price: response[x]['price'],
            });
            this.filterByList.push(response[x]);
            this.showLoading = false;
          } 
        }
      }else {
        this.showLoading = true;
      }
    });
  }
  getProductDetail(productId) {
    if (productId) {
      this.router.navigate(['/productDetail/' + productId]);
    }
  }


  truncateChar(text: string): string {
    let charlimit = 20;
    if (!text || text.length <= charlimit) {
      return text;
    }
    let without_html = text.replace(/<(?:.|\n)*?>/gm, '');
    let shortened = without_html.substring(0, charlimit) + '...';
    return shortened;
  }
 

}
