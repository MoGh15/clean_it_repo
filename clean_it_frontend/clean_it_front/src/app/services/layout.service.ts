import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  layoutVisible: boolean = false;

  constructor() {
  }

  setLayoutVisible(layoutVisible: boolean) {

    this.layoutVisible = layoutVisible;

  }

  isHeaderVisible() {
    const headerVisible = localStorage.getItem('isHeaderVisible');
    if (headerVisible == 'true') {
      return true
    } else {
      return false;
    }
  }
}
