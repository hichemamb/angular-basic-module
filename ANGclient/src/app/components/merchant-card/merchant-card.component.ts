import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-merchant-card',
  templateUrl: './merchant-card.component.html',
  styleUrls: ['./merchant-card.component.scss']
})
export class MerchantCardComponent implements OnInit {

  @Input() merchant: any;

  constructor() { }

  ngOnInit() {
  }


}
