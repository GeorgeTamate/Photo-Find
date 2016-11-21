// Angular
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

// 3rd parties
import 'rxjs';

@Injectable()
export class SimpleHttp {
  constructor(private http: Http) {
  }

  get() {
    return this.http.get('https://randomuser.me/api/?results=10')
      .map((response: Response) => {
        return response.json();
      });
  }

  getToServer() {
    return this.http.get('http://8afba4a9.ngrok.io')
      .map((response: Response) => {
        return response.json();
      });
  }

  post(data) {
    var params = 'pic=' + data;
  	var headers = new Headers();
  	headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post('http://8afba4a9.ngrok.io', params, {headers: headers})
      .map((response: Response) => {
        return response.json();
      });

  } 
}
