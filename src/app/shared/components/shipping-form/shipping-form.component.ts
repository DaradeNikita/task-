import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Iproduct } from '../../models/product';

@Component({
  selector: 'app-shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.scss']
})
export class ShippingFormComponent implements OnInit {
shippingForm!:FormGroup;
prodId!:string;
prodObj!:Iproduct;
saleTax:number = 0 ;
totalDue:number = 0;



  private email = '^[a-zA-Z0-9.-]+@[a-zA-Z0-9-.]+\\.[a-zA-Z]{2,100}$';

  constructor(private _router:Router,private _prod:ProductService,
    private _route:ActivatedRoute
  ) { }

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
 
  this.createForm();

 
  }

  createForm(){
    this.shippingForm = new FormGroup({
      firstName:new FormControl(null,[Validators.required,Validators.minLength(4),
        Validators.maxLength(8),]),
      lastName:new FormControl(null,[Validators.required,Validators.minLength(4),
        Validators.maxLength(8),]),
      email:new FormControl(null,[Validators.required,Validators.pattern(this.email)]),
      contactNo:new FormControl(null,[Validators.required]),
      flat:new FormControl(null,[Validators.required]),
      address:new FormControl(null,[Validators.required]),
      city:new FormControl(null,[Validators.required]),
      state:new FormControl(null,[Validators.required]),
      postalCode:new FormControl(null,[Validators.required]),
      payment:new FormControl(null,[Validators.required])

    })
  }
  get shipForm(){
 return  this.shippingForm.controls
  }
  onItemAdd(){
    // if(this.shippingForm.valid){
      let obj ={...this.shippingForm.value};
      console.log(obj)
      this._router.navigate([`shipping/${this.prodId}/delivery`])
    // }
  }
 


 }




