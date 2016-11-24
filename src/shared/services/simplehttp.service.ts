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

  post(data) {
    var params = 'pic=' + data;
  	var headers = new Headers();
  	headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post('http://3d510f6d.ngrok.io', params, {headers: headers})
      .map((response: Response) => {
        return response.json();
      });

  }

  requestLoginFacebook() {
    return this.http.get('https://randomuser.me/api/?results=10')
      .map((response: Response) => {
        return response.json();
      });

  }

}
