import {Component, OnDestroy} from '@angular/core';
import {EventStore} from "./services/eventStore";
import {SnackBarService} from "./services/snack-bar.service";
import {HttpInterceptorService} from "./services/HttpInterceptorService";
import {LayoutService} from "./services/layout.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnDestroy {
  title = 'clean_it';
  constructor(public eventStore: EventStore,
              private snackBarService: SnackBarService,
              private layoutService: LayoutService,
              private httpInterceptorService: HttpInterceptorService) {
  }

  get isHeaderVisible(): boolean {
    return this.layoutService.isHeaderVisible();
  }

  ngOnDestroy(): void {
    this.httpInterceptorService.requests.unsubscribe();
  }
}
