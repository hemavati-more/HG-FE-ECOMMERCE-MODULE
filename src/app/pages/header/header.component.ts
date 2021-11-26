import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public topNav = [
    { id: 1, name: 'My Account |' },
    { id: 2, name: 'Notification |' },
    { id: 3, name: 'Checkout |' },
    { id: 4, name: 'Login ' },
  ];
  public navList = [
    { id: 1, name: 'Home' },
    { id: 2, name: 'Your Guide' },
    { id: 3, name: 'Guided Services' },
    { id: 4, name: 'Virtual Clinic' },
    { id: 5, name: 'Store' },
    { id: 6, name: 'Support' },
  ];
  public totalItem: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res) => {
      this.totalItem = res.length;
    });
  }
}
