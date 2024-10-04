import {Injectable} from '@angular/core';
import {MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition} from '@angular/material/snack-bar';
import {SnackType} from "../models/SnackBar";
import {SnackBarComponent} from "../components/snack-bar/snack-bar.component";


@Injectable({
  providedIn: 'root'
})

export class SnackBarService {

  constructor(private snackBar: MatSnackBar) {
  }

  public openSnackBar(message: string, snackType: SnackType) {
    const panelClass = {
      Success: 'success-snack',
      Error: 'error-snack',
      Warn: 'warn-snack',
      Download: 'download-snack',
      Done: 'done-snack'
    };

    let config: MatSnackBarConfig = {
      duration: snackType != 'Download' ? 10000 : 0,
      horizontalPosition: 'center' as MatSnackBarHorizontalPosition,
      panelClass: [panelClass[snackType], 'custom-snackbar'],
      data: {message, snackType},
    };

    this.snackBar.openFromComponent(SnackBarComponent, config);
  }

  public closeSnackBar() {
    this.snackBar.dismiss();
  }
}
