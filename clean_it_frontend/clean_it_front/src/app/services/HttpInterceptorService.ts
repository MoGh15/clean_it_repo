import {Injectable} from "@angular/core";
import {HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Subject} from "rxjs";

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  public requests: Subject<any> = new Subject<any>();

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const request = next.handle(req);
    this.requests.next(request);
    return request;
  }

}
