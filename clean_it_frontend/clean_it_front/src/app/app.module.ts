import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {EventStore} from "./services/eventStore";
import {SnackBarService} from "./services/snack-bar.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {HttpInterceptorService} from "./services/HttpInterceptorService";
import {HeaderComponent} from "./components/header/header.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import {DialogModule} from "./dialog/dialog.module";
import {MaterialModule} from "./modules/material/material.module";
import {SnackBarComponent} from "./components/snack-bar/snack-bar.component";
import {LoginComponent} from "./components/login/login.component";
import {RegistrationComponent} from "./components/registration/registration.component";
import {CommonModule} from "@angular/common";
import { OrderComponent } from './components/order/order/order.component';
import { ClothingSubmissionComponent } from './components/clothing-submission/clothing-submission/clothing-submission.component';
import { CustomerAddComponent } from './components/customer-add/customer-add.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SnackBarComponent,
    LoginComponent,
    RegistrationComponent,
    OrderComponent,
    ClothingSubmissionComponent,
    CustomerAddComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    MaterialModule,
    DialogModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [
    SnackBarService,
    EventStore,
    HttpInterceptorService,
    {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
