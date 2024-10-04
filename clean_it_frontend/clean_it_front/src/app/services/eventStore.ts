import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";


@Injectable()
export class EventStore {
  private eventID: BehaviorSubject<any>;
  private accessToken: BehaviorSubject<any>;
  private BehaviorUserID: BehaviorSubject<any>;

  constructor() {
    this.accessToken = new BehaviorSubject({
      accessToken: "",
    });
    this.eventID = new BehaviorSubject({
      id: "",
    });
    this.BehaviorUserID = new BehaviorSubject({
      id: '',
    });
  }

  setEventID(rtEventID: string) {
    localStorage.setItem('rtEventID', rtEventID);
    this.eventID.next(rtEventID);
  }

  getEventID() {
    const rtEvent = localStorage.getItem('rtEventID');
    if (rtEvent) {
      return rtEvent;
    } else {
      return this.eventID.getValue();
    }
  }

  setAccessToken(accessToken: string) {
    localStorage.setItem('accessToken', accessToken);
    this.accessToken.next(accessToken);
  }

  getAccessToken() {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      return accessToken;
    } else {
      return this.accessToken.getValue();
    }
  }

  setUserID(userID: String) {
    localStorage.setItem('userID', JSON.stringify(userID));
    this.BehaviorUserID.next(userID);
  }

  getUserID() {
    const userID = localStorage.getItem('userID');
    if (userID) {
      return JSON.parse(userID);
    } else {
      return this.BehaviorUserID.getValue();
    }
  }
}
