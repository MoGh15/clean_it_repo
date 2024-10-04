import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from '@angular/router';
import {BehaviorSubject} from "rxjs";
import {SnackBarService} from "../snack-bar.service";
import {EventStore} from "../eventStore";
import {AuthResponse, User} from "../../models/user";
import {ApiService} from "../api.service";
import {LayoutService} from "../layout.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginError: boolean = false;
  loggedIn: boolean = false;
  private authenticated: boolean = false;
  authenticated$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.authenticated);


  constructor(private apiService: ApiService,
              private eventStore: EventStore,
              private snackBar: SnackBarService,
              private layoutService: LayoutService,
              private http: HttpClient,
              private router: Router) {
  }

  login(username: string, password: string) {

    this.apiService.authenticate(username, password).subscribe(
      value => {
        // Successful login
        const authResponse: AuthResponse = value;
        this.eventStore.setUserID(authResponse.userId);
        this.eventStore.setAccessToken(authResponse.accessToken);


        this.loginError = false;
        this.setAuthenticated(true);
        this.router.navigateByUrl('/clothing-submission');
        localStorage.setItem('isHeaderVisible', 'true');
        this.layoutService.setLayoutVisible(true);
        this.snackBar.openSnackBar("login was successful!", "Success");
      },
      error => {
        // Fehlerhafter Login
          this.setAuthenticated(false);
          this.loginError = true;
          this.snackBar.openSnackBar("Invalid username or password.", "Error");
      }
    );
  }

  setAuthenticated(auth: boolean) {
    this.authenticated = auth;
    localStorage.setItem('authenticated', this.authenticated.toString());
    // Emit authenticated changes
    this.authenticated$.next(auth);
  }

  isAuthenticated(): boolean {
    const authenticatedString = localStorage.getItem('authenticated');
    if (authenticatedString) {
      const authenticated = Boolean(authenticatedString);
      this.authenticated = authenticated;
      this.authenticated$.next(authenticated);
      return authenticated;
    } else {
      return false;
    }
  }

  private getUser(token: string): User | null {
    if (!token) {
      return null
    }
    return JSON.parse(atob(token.split('.')[1])) as User;
  }

}
