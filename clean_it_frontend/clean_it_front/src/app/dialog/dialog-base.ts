import {Directive, HostListener, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Directive()
export abstract class DialogBase<T, D, R> {
  public constructor(
    protected dialogRef: MatDialogRef<T, R>,
    @Inject(MAT_DIALOG_DATA) public data: D) {
    dialogRef.disableClose = true;
  }

  @HostListener('window:keyup.esc') onKeyUp() {
    this.dialogRef.close();
  }
}
