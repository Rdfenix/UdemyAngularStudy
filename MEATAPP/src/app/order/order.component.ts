import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'app/shared/radio/radio-option.model';
import { OrderService } from './order.service';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  paymentOPtions: RadioOption[] = [
    { label: "dinheiro", value: "MON" },
    { label: "Cartão de Credito", value: "CRED" },
    { label: "Cartão de Debito", value: "DEB" },
  ]

  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }

  cardItems(){
    return this.orderService.cartItems()
  }

  increaseQty(item: CartItem){}

}
