import {Component} from '@angular/core';
import {User} from "../../models/user";
import {ApiService} from "../../services/api.service";
import {SnackBarService} from "../../services/snack-bar.service";
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  user: User = {
    username: '',
    password: ''
  };


  constructor(private snackBar: SnackBarService, private apiService: ApiService, private dialog: MatDialog) {
  }


  onSubmit(): void {
    this.apiService.register(this.user)
      .subscribe(
        response => {
          this.dialog.closeAll();
          // handle successful registration here
          this.snackBar.openSnackBar("Registration successful!", "Success");
        },
        error => {

          // handle registration error here
          if (error.status === 409) {
            this.snackBar.openSnackBar("Username already taken. Please choose a different username.",
              "Error");
          } else {
            this.snackBar.openSnackBar("An error occurred while registering. Please try again later.",
              "Error");
          }
        }
      );



  }


  onCancel(event: Event) {
    event.stopPropagation();
    this.dialog.closeAll();
  }
}
