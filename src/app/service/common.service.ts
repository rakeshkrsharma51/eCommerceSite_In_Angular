import { Injectable } from '@angular/core';
import { DataType } from '../model/dataType';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public selectedProducts: Array<Product> = [];
  public productInfo: [DataType];
  noOfItemsInCart: number;
  constructor() { }
}
