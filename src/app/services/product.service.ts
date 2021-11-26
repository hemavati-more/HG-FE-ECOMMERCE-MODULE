import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
const woocommerce = {
  consumer_key: '?consumer_key=ck_9c6a2ada46173aa7f18a9b56127ea591726aa9c4',
  consumer_secret:
    '&consumer_secret=cs_9d229ce1e0b0c22c62102703a776a2d19b43e668',
};

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  public api: any = environment.api;

  constructor(private http: HttpClient) {}

  getAllProductCategory() {
    return this.http.get<any>(this.api.product_category);
  }

  getAllProductList() {
    return this.http.get<any>(this.api.product_list);
  }

  getProductDetail(id: any) {
    if (id) {
      return this.http.get<any>(
        this.api.product_detail +
          id +
          woocommerce.consumer_key +
          woocommerce.consumer_secret
      );
    }
  }

  getProductReview(productId: any) {
    if (productId) {
      return this.http.get<any>(
        this.api.product_review +
          'product=' +
          productId +
          '&consumer_key=ck_9c6a2ada46173aa7f18a9b56127ea591726aa9c4' +
          '&consumer_secret=cs_9d229ce1e0b0c22c62102703a776a2d19b43e668'
      );
    }
  }
}
