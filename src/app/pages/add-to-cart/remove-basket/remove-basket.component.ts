import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-remove-basket',
  templateUrl: './remove-basket.component.html',
  styleUrls: ['./remove-basket.component.css'],
  providers: [NgbModalConfig, NgbModal]

})
export class RemoveBasketComponent implements OnInit {
@Input() removeProduct;
@Output() newItemEvent = new EventEmitter<any>();

  constructor(config: NgbModalConfig, 
    private modalService: NgbModal,
    private cartService: CartService) {
    config.backdrop = 'static';
    config.keyboard = false;
  }
  ngOnInit() { 
  }  
  
  addNewItem(value: any) {
    this.newItemEvent.emit(value);
    this.modalService.dismissAll();
  }
  open(content) {
    this.modalService.open(content);
  }

  removeCartItem(){
  }
  close(){
    this.modalService.dismissAll();
  }

}
