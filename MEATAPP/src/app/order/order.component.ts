import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'app/shared/radio/radio-option.model';

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

  constructor() { }

  ngOnInit() {
  }

}
