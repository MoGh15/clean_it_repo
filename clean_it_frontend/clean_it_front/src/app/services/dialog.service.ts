import {Injectable} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {DialogBase} from "../dialog/dialog-base";


type Newable<T> = new (...args: any[]) => T;
type DialogType<T, D, R> = Newable<DialogBase<T, D, R>>;

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(
    private dialog: MatDialog,
  ) {
  }

  public async open<T, D, R>(
    type: DialogType<T, D, R>,
    config: MatDialogConfig<D>,
    defaultReturnValue: R
  ): Promise<R> {
    return (await this.dialog.open<T, D, R>(type as any, config).afterClosed().toPromise()) ?? defaultReturnValue;
  }
}
