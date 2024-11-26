import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iproduct } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss']
})
export class DeliveryComponent implements OnInit {
  prodId!:string;
  prodObj!:Iproduct;
  saleTax:number = 0 ;
  totalDue:number = 0;
 type:Array<string> = ['Standard 5-7 Busniess days','2-4 Busniess days','Same Day Delivery']

  constructor(private _prod:ProductService,
    private _route:ActivatedRoute,
  private _router : Router) { }

  ngOnInit(): void {
    this._route.params
   .subscribe((params:Params) =>{
    this.prodId = params['id'];
    console.log(this.prodId)
    this._prod.fetchSingleProducte(this.prodId)
    .subscribe((res :Iproduct) =>{
      this.prodObj = res
      console.log(this.prodObj)
        this.saleTax =(6.5 / 100) * this.prodObj.price;
   console.log(this.saleTax);
   this.totalDue = this.prodObj.price + this.saleTax 
    })
   });
 
  }
  onBtn(){
    console.log('hii')
    this._router.navigate(['/shipping',this.prodId,'delivery payment'])
  }
}
