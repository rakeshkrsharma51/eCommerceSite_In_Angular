import { Component, OnInit } from '@angular/core';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-modal-doalog-box',
  templateUrl: './modal-doalog-box.component.html',
  styleUrls: ['./modal-doalog-box.component.scss']
})
export class ModalDoalogBoxComponent implements OnInit {
  public selectedItems = [];
  private totalAvailProductQuantity: number;
  constructor(private common: CommonService) { }

  ngOnInit() {
    this.selectedItems = this.common.selectedProducts;
  }

  trackBy(index: number, value: any) {
    return value.id;
  }

  remove(index: number, items: number, id: number) {
    this.selectedItems.splice(index, 1);
    this.common.productInfo.forEach(element => {
      if (element.id === id) {
        element.quantity = (+element.quantity + items).toString();
      }
    });
    this.common.noOfItemsInCart -= 1;
  }

  quantityChange(event: any) {
    const updatedQuantity = +event.target.value;
    if (updatedQuantity === 0) {
      alert('Quantity can not be 0, if you don\'\ want it please remove it from cart!');
      return;
    }

    if (updatedQuantity > this.totalAvailProductQuantity) {
      alert('in-sufficient quantity!');
      return;
    }
  }

  previousValue(event: any, id: number) {
    const product = this.common.productInfo.filter(prod => prod.id === id);
    const availQuantity = +product[0].quantity;
    this.totalAvailProductQuantity = +event.target.value + availQuantity;
  }
}
