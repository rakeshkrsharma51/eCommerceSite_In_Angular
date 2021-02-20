import { Component, OnInit } from '@angular/core';
import { ApiService } from './service/api.service';
import { map } from 'rxjs/operators';
import { DataType } from './model/dataType';
import { CommonService } from './service/common.service';
import { Product } from './model/product';
import { MatDialog } from '@angular/material/dialog';
import { ModalDoalogBoxComponent } from './modal-doalog-box/modal-doalog-box.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private service: ApiService, public common: CommonService,
              private dialog: MatDialog) {}

  ngOnInit() {
    this.service
      .getData()
      .pipe(
        map((init) => {
          init.data.map((value) => {
            value.defaultQuantity = 0;
          });
          return init;
        })
      )
      .subscribe((response) => {
        if (response) {
          this.common.productInfo = response.data;
        }
      });
  }

  trackby(index: number, value: any) {
    return value.id;
  }

  addProductQuantity(index: number) {
    const selectedIndexItems = this.common.productInfo[index];
    const availableQuantity = +selectedIndexItems.quantity;
    if (selectedIndexItems.defaultQuantity <= availableQuantity - 1) {
      selectedIndexItems.defaultQuantity += 1;
    } else {
      alert('Only ' + availableQuantity + ' items are available for now!!!');
    }
  }

  removeProductQuantity(index: number) {
    if (this.common.productInfo[index].defaultQuantity > 0) {
      this.common.productInfo[index].defaultQuantity -= 1;
    }
  }

  addToCart(index: number) {
    const selectedIndexItems = this.common.productInfo[index];
    const id = selectedIndexItems.id;
    const name = selectedIndexItems.name;
    const unitPrice = +selectedIndexItems.price;
    const noOfItems = selectedIndexItems.defaultQuantity;
    const subTotal = +unitPrice * noOfItems;
    if (noOfItems === 0) {
      alert('Please add no. of quantity!!!');
      return;
    }
    if (this.common.selectedProducts.filter((val) => val.id === id).length > 0) {
      const valIndex = this.common.selectedProducts.findIndex((val) => val.id === id);
      this.common.selectedProducts[valIndex].noOfItems += noOfItems;
      this.common.selectedProducts[valIndex].subTotal += subTotal;
    } else {
      const item: Product = {
        id,
        name,
        unitPrice,
        noOfItems,
        subTotal,
      };
      this.common.selectedProducts.push(item);
    }
    const availQuantity = Number(this.common.productInfo[index].quantity) - noOfItems;
    this.common.productInfo[index].quantity = availQuantity.toString();
    this.common.productInfo[index].defaultQuantity = 0;
    this.common.noOfItemsInCart = this.common.selectedProducts.length;
  }

  openDialog() {
    const dialog = this.dialog.open(ModalDoalogBoxComponent);
  }
}
