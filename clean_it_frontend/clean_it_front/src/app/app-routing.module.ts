import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {OrderComponent} from "./components/order/order/order.component";
import {AuthGuard} from "./services/login/auth.guard";
import {
  ClothingSubmissionComponent
} from "./components/clothing-submission/clothing-submission/clothing-submission.component";
import {CustomerAddComponent} from "./components/customer-add/customer-add.component";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: "login", component: LoginComponent},
  { path: "order", component: OrderComponent, canActivate: [AuthGuard]},
  { path: "clothing-submission", component: ClothingSubmissionComponent, canActivate: [AuthGuard]},
  { path: "customer-add", component: CustomerAddComponent, canActivate: [AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
