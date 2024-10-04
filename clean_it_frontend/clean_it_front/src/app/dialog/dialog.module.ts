import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatStepperModule} from "@angular/material/stepper";
import {ConfirmDialogComponent} from "./confirm-dialog/confirm-dialog.component";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    ConfirmDialogComponent,
  ],
  imports: [
    MatInputModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
  ]
})
export class DialogModule {
}
