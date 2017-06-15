import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions, RequestOptionsArgs, ConnectionBackend, Headers, Request} from "@angular/http";
import {Observable} from "rxjs";
import {UserService} from "./user.service";

@Injectable()
export class HttpService extends Http {
  token;

  constructor(_backend: ConnectionBackend, _defaultOptions: RequestOptions) {
    super(_backend, _defaultOptions);
    console.log(this.token);
    if (this.token){
      _defaultOptions.headers.set('Authorization', `${this.token}`);
    }
  }

  request(url: string|Request, options?: RequestOptionsArgs): Observable<Response> {
    this.token = localStorage.getItem('user');
    if (typeof url === 'string') {
      if (!options) {
        options = {headers: new Headers()};
      }
      options.headers.set('Authorization', `${this.token}`);
      options.headers.set('Content-Type', `application/json`);
    } else {
      if (!options) {
        options = {headers: new Headers()};
      }
      options.headers.set('Authorization', `${this.token}`);
      options.headers.set('Content-Type', `application/json`);
      url.headers.set('Authorization', `${this.token}`);
      url.headers.set('Content-Type', `application/json`);
    }
    return super.request(url, options).catch(this.catchAuthError(this));
  }

  private catchAuthError (self: HttpService) {
    return (res: Response) => {
      console.log(res);
      if (res.status === 401 || res.status === 403) {
        console.log(res);
      }
      return Observable.throw(res);
    };
  }

  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return super.get(url, options)
      .catch(this.handleError);
  }

  post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    return super.post(url, body, options)
      .catch(this.handleError);
  }

  put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    return super.put(url, body, options)
      .catch(this.handleError);
  }

  delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return super.delete(url, options)
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    console.log(error['status'], error['_body']);
    return Observable.throw(error);
  }
}
