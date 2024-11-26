import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Iproduct } from '../../models/product';
import { PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {
productArr:Iproduct[] =[]

data = Array.from({ length: 50 }, (_, i) => `card ${i + 1}`); // Example data
  paginatedData: string[] = [];
  pageSize = 5;
  currentPage = 0;

  constructor(private _prod:ProductService) {
    this.updatePaginatedData();
  }

  onPageChange(event: PageEvent): void {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.updatePaginatedData();
  }

  updatePaginatedData(): void {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedData = this.data.slice(startIndex, endIndex);
  }

  ngOnInit(): void {
    this._prod.getAllProducts()
    .subscribe((res:Iproduct[])=>{
      this.productArr = res
    })
  }
}

