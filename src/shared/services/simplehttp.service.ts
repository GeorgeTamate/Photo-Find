// Angular
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';

// 3rd parties
import 'rxjs';

@Injectable()
export class SimpleHttp {
  public dummyUserId: string = 'facebook|1226531207385424';
  public dummyDesc: string = 'A photo from the device.';
  public dummyTags: string = 'Education';
  public ngrokUrl: string = 'http://b8358594.ngrok.io';
  constructor(private http: Http, 
              private authHttp: AuthHttp) {
  }

  get() {
    return this.http.get('https://randomuser.me/api/?results=10')
      .map((response: Response) => {
        return response.json();
      });
  }

  post(imgData) {
    var params = 'photo=' + imgData
      + '&userid=' + this.dummyUserId
      + '&description=' + this.dummyDesc
      + '&tags=' + this.dummyTags;
  	var headers = new Headers();
  	headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(this.ngrokUrl, params, {headers: headers})
      .map((response: Response) => {
        return response.json();
      });
  }

  postCreate(imgData) {
    var params = 'photo=' + imgData
      + '&userid=' + this.dummyUserId
      + '&description=' + this.dummyDesc
      + '&tags=' + this.dummyTags;
  	var headers = new Headers();
  	headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post(this.ngrokUrl + '/create', params, {headers: headers})
      .map((response: Response) => {
        return response.json();
      });
  }

  getPictures() {
    console.log('pictures get');
    return this.http.get('/api' + '/pictures' )
      .map((response: Response) => {
        console.log('response', response);
        return response.json();
      });
  } 

  requestLoginFacebook() {
    console.log('auth get');
    return this.http.get('https://randomuser.me/api/?results=10')
      .map((response: Response) => {
        console.log('auth get');
        return response.json();
      });

  }

  authGet() {
    console.log('auth get');
    return this.authHttp.get(this.ngrokUrl)
      .map((response: Response) => {
        console.log('response', response);
        return response.json();
      });
  }

  myPictures() {
    console.log('auth get');
    return this.authHttp.get('https://randomuser.me/api/?results=10')
      .map((response: Response) => {
        console.log('response', response);
        return response.json();
      });
  }

  searchPicturesByTag(tag) {
    var params = 'tag' + tag;
    var headers = new Headers();
    console.log('auth get');
    return this.authHttp.post('/api' + '/pictures', params, {headers: headers})
      .map((response: Response) => {
        console.log('response', response);
        return response.json();
      });
  }

}
