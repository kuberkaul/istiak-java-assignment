import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { environment } from './../../../../environments/environment';

@Injectable()
export class HttpRequestService {

  constructor(
    private http: Http,
  ) { }

  createAuthorizationHeader(headers: Headers) {

    headers.append('Content-Type', 'application/json')
    headers.append('Accept-Language', environment.lang);

    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      console.log(accessToken)
      headers.append('Authorization', 'Bearer ' + accessToken);
    }

    console.log(headers)
  }

  get(url, params: any = '') {
    const headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get(url, {
      search: params,
      headers: headers
    });
  }

  post(url, data) {
    const headers = new Headers();
    this.createAuthorizationHeader(headers);

    return this.http.post(url, data, {
      headers: headers
    });
  }

  put(url, data) {
    const headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.put(url, data, {
      headers: headers
    });
  }

  delete(url, data?) {
    const headers = new Headers();
    this.createAuthorizationHeader(headers);

    if (data) {
      return this.http.delete(url, new RequestOptions({
        headers: headers,
        body: data
      }));
    } else {
      return this.http.delete(url, {
        headers: headers
      });
    }

  }

  patch(url, data) {
    const headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.patch(url, data, {
      headers: headers
    });
  }



}
