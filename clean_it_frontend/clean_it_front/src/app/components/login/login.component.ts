import { Component } from '@angular/core';

import { AuthService } from '../../services/login/auth.service';
import { MatDialog } from '@angular/material/dialog';
import {RegistrationComponent} from "../registration/registration.component";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, public dialog: MatDialog) {}

  getAuthService(): AuthService {
    return this.authService;
  }

  onSubmit() {
    this.authService.login(this.username, this.password);
  }

  openDialog() {
    const dialogRef = this.dialog.open(RegistrationComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }



}
