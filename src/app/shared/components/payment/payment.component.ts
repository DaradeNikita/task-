import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Iproduct } from '../../models/product';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  prodId!: string;
  prodObj!: Iproduct;
  saleTax:number = 0 ;
  totalDue:number = 0;
  paymentType : string[] =['Pay On Delivery','Credential Card'];
  paymentForm!:FormGroup;



  constructor(private _prod: ProductService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit(): void {
    this._route.params
      .subscribe((params: Params) => {
        this.prodId = params['id'];
        console.log(this.prodId)
        this._prod.fetchSingleProducte(this.prodId)
          .subscribe((res: Iproduct) => {
            this.prodObj = res
            console.log(this.prodObj)
            this.saleTax =(6.5 / 100) * this.prodObj.price;
            console.log(this.saleTax);
            this.totalDue = this.prodObj.price + this.saleTax 
          })

      })
      this.createPaymentForm()
  }

  createPaymentForm(){
    this.paymentForm = new FormGroup({
      paymentType:new FormControl(null),
      cardNum:new FormControl(null,[Validators.required,Validators.maxLength(12),])

    })
  }
  onBtn(){
 this._router.navigate([`shipping/${this.prodId}/delivery payment success`])
  }
}
