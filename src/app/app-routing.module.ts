import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { LandingComponent } from './pages/landing/landing.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { AddToCartComponent } from './pages/add-to-cart/add-to-cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ThankYouComponent } from './pages/thank-you/thank-you.component';

const routes: Routes = [
  { path: 'dashbord', component: LandingComponent },
  { path: 'product', component: ProductComponent },
  { path: 'productDetail/:id', component: ProductDetailComponent },
  {path: 'addToCart', component: AddToCartComponent},
  {path: 'checkOut', component: CheckoutComponent},
  {path: 'thankYou', component: ThankYouComponent},
  { path: '', redirectTo: '/dashbord', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
