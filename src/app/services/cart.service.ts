import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartItemList: any = [];
  public showProducts = new BehaviorSubject<any>([]);
  public products = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>('');

  constructor() {}
  getProducts() {
    return this.showProducts.asObservable();
  }

  setProduct(product: any) {
    this.cartItemList.push(...product);
    this.showProducts.next(product);
  }
  addtoCart(product: any) {
    this.cartItemList.push(product);
    this.showProducts.next(this.cartItemList);
    this.getTotalPrice();
  }
  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal += parseInt(a.price);
    });
    return grandTotal;
  }
  removeCartItem(product: any) {
    this.cartItemList.map((a:any, index:any)=>{
      if(product[index].id === a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.products.next(this.cartItemList);
  }

  removeAllCart() {
    this.cartItemList = [];
    this.showProducts.next(this.cartItemList);
  }
}
