import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iproduct } from '../../models/product';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.scss']
})
export class OrderSuccessComponent implements OnInit {
orderId!:string;
prodId!:string;
prodObj!:Iproduct;



  constructor(private _product:ProductService,
    private _route:ActivatedRoute,
    private _router :Router
  ) { }

  ngOnInit(): void {
   this.orderId = this._product.uuidv4();
   this._product.sendId(this.orderId)
   this._route.params
  .subscribe((params:Params) =>{
    this.prodId = params['id'];
    this._product.fetchSingleProducte(this.prodId)
    .subscribe((res:Iproduct)=>{
       this.prodObj = res
    })
  })
   
  }
onBtnNvaigate(){
  this._router.navigate(['shipping',this.prodId,'delivery payment success vieworder'])
}

}
