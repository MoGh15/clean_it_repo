import {Component, Inject} from '@angular/core';
import {MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';
import {ISnackBarData} from "../../models/SnackBar";


@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss']
})
export class SnackBarComponent {

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: ISnackBarData,
  ) {
  }

  icon() {
    const icon: { [index: string]: string } = {
      Success: 'check_circle',
      Error: 'error',
      Warn: 'warning',
      Download: 'check_circle',
      Done: 'check_circle'
    };
    return icon[this.data.snackType];
  }

}
