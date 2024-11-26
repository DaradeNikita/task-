import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Iproduct } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // productUrl = `http://localhost:3000/shippingItem`

 private orderSub$:Subject<string> = new Subject<string>();
 ordderAsObs$ = this.orderSub$ as  Observable<string>

  constructor(private _http:HttpClient) { }
  

  getAllProducts():Observable<Iproduct[]>{
    return this._http.get<Iproduct[]>(`http://localhost:3000/shippingItem`)
  }

  fetchSingleProducte(id:string):Observable<Iproduct>{
return this._http.get<Iproduct>(`http://localhost:3000/shippingItem/${id}`)
  }

  sendId(id:string){
   this.orderSub$.next(id)
  }

 uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
    .replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0, 
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
}
