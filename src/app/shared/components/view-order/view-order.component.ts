import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../../models/product';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.scss']
})
export class ViewOrderComponent implements OnInit {
  prodId!:string;
  prodObj!:Iproduct;
  orderId!:string;


  constructor(private _product:ProductService,
    private _route:ActivatedRoute,
    private _router :Router) { }

  ngOnInit(): void {
    this._route.params
  .subscribe((params:Params) =>{
    this.prodId = params['id'];
    this._product.fetchSingleProducte(this.prodId)
    .subscribe((res:Iproduct)=>{
       this.prodObj = res
    })
  })
  this._product.ordderAsObs$.subscribe((res:any) =>{
    this.orderId = res
    console.log(this.orderId)
  })
  }

}
