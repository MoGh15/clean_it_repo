import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/login/auth.service";
import {LayoutService} from "../../services/layout.service";
import {HttpInterceptorService} from "../../services/HttpInterceptorService";
import {ConfirmDialogComponent} from "../../dialog/confirm-dialog/confirm-dialog.component";
import {SnackBarService} from "../../services/snack-bar.service";
import {ApiService} from "../../services/api.service";
import {EventStore} from "../../services/eventStore";
import {DialogService} from "../../services/dialog.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentNavItem = 'dashboard';
  isDarkMode: boolean = true;
  role: string = "";



  constructor(private snackBar: SnackBarService,
              private dialogService: DialogService,
              private router: Router,
              private authService: AuthService,
              private layoutService: LayoutService,
              private eventStore: EventStore,
              private apiService: ApiService,
              private httpInterceptorService: HttpInterceptorService) {
  }

  async ngOnInit() {
    this.apiService.getUserRole(this.eventStore.getUserID()).subscribe(value => {
      this.role = value.role.toLowerCase();
    });
  }


  async onClickLogout() {

    const popUpDelete = await this.dialogService.open(ConfirmDialogComponent, {
      width: "400px",

      data: {
        caption: "Log out",
        text: "Are you sure you want to log out?",
      },
    }, null);
    if (!popUpDelete) return;
    if (popUpDelete.button === "NO") {
      return;
    }
    if (popUpDelete.button === "YES") {
      try {
        localStorage.setItem('isHeaderVisible', 'false');
        await this.router.navigate(['/login']);
        this.authService.setAuthenticated(false);
        this.layoutService.setLayoutVisible(false);
        this.httpInterceptorService.requests.unsubscribe();
        localStorage.clear();
        this.snackBar.openSnackBar("successfully logged out.", "Success");
      } catch (err) {
        this.snackBar.openSnackBar("An error occurred while logging out. Please reload the page and try again.",
          "Error");
      }
    }
  }


  onClickNavItem(navItem: string): void {
    this.currentNavItem = navItem;
  }


}
