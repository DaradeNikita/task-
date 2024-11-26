import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { ItemCardComponent } from './shared/components/item-card/item-card.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {MatBadgeModule} from '@angular/material/badge';
import {MatStepperModule} from '@angular/material/stepper';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import { ShippingFormComponent } from './shared/components/shipping-form/shipping-form.component';
import { DeliveryComponent } from './shared/components/delivery/delivery.component';
import { PaymentComponent } from './shared/components/payment/payment.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { OrderSuccessComponent } from './shared/components/order-success/order-success.component';
import { ViewOrderComponent } from './shared/components/view-order/view-order.component';
import { SteeperComponent } from './shared/components/steeper/steeper.component';
// import {TranslateModule, TranslateLoader} from "@ngx-translate/core";
// import {TranslateHttpLoader} from '@ngx-translate/http-loader';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ItemCardComponent,
    ShippingFormComponent,
    DeliveryComponent,
    PaymentComponent,
    OrderSuccessComponent,
    ViewOrderComponent,
    SteeperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatBadgeModule,
    MatStepperModule,
    MatPaginatorModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    
    
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
