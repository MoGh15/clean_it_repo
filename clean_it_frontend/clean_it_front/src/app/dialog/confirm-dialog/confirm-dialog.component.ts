import {Component} from '@angular/core';
import {DialogBase} from '../dialog-base';

export interface IConfirmDialogData {
  caption: string;
  text: string;
}

export interface IConfirmDialogResult {
  button: Button;
}

type Button = 'YES' | 'NO';

@Component({
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent extends DialogBase<ConfirmDialogComponent, IConfirmDialogData, IConfirmDialogResult> {
  dialogButtonClicked(button: Button) {
    this.dialogRef.close({
      button
    });
  }
}
