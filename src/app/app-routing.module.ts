import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemCardComponent } from './shared/components/item-card/item-card.component';
import { ShippingFormComponent } from './shared/components/shipping-form/shipping-form.component';
import { DeliveryComponent } from './shared/components/delivery/delivery.component';
import { PaymentComponent } from './shared/components/payment/payment.component';
import { OrderSuccessComponent } from './shared/components/order-success/order-success.component';
import { ViewOrderComponent } from './shared/components/view-order/view-order.component';

const routes: Routes = [
  {
    path:'',
    component:ItemCardComponent
  },
  {
    path:'products',
    component:ItemCardComponent
  },
  {
    path:'shipping/:id',
    component:ShippingFormComponent
  },
  {
    path:'shipping/:id/delivery',
    component:DeliveryComponent
  },
  {
    path:'shipping/:id/delivery payment',
    component:PaymentComponent
  },
  {
    path:'shipping/:id/delivery payment success',
    component:OrderSuccessComponent 
  },
  {
  path:'shipping/:id/delivery payment success vieworder',
  component:ViewOrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
