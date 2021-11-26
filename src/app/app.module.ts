import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal'; 
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import {ProductService } from './services/product.service';
import { HeaderComponent } from './pages/header/header.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { AddToCartComponent } from './pages/add-to-cart/add-to-cart.component';
import { FilterPipe } from './handler/filter.pipe';
import { CustomDatePipe } from './handler/custom-date.pipe';
import { FooterComponent } from './pages/footer/footer.component';
import { ApplyCouponComponent } from './pages/add-to-cart/apply-coupon/apply-coupon.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ThankYouComponent } from './pages/thank-you/thank-you.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RemoveBasketComponent } from './pages/add-to-cart/remove-basket/remove-basket.component';
import { JoinFamilyComponent } from './pages/join-family/join-family.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeaderComponent,
    ProductComponent,
    ProductDetailComponent,
    AddToCartComponent,
    FilterPipe,
    CustomDatePipe,
    FooterComponent,
    ApplyCouponComponent,
    CheckoutComponent,
    ThankYouComponent,
    RemoveBasketComponent,
    JoinFamilyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),  
    RouterModule,
    HttpClientModule,
    NgbModule
  ],
  providers:[ProductService],
  // providers: [ {
  //   provide: HTTP_INTERCEPTORS,
  //   useClass: ProductService,
  //   multi: true
  // }],
  bootstrap: [AppComponent]
})
export class AppModule { }
