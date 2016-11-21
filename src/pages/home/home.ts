// Angular
import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

// Ionic
import { NavController } from 'ionic-angular';
import { Camera } from 'ionic-native';

//
import { SimpleHttp } from '../../shared/services/include'

// 3rd Party

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public people: any;
  public base64Image: string;
  constructor(
    public navCtrl: NavController,
    public sanitizer: DomSanitizer,
    public httpApi: SimpleHttp
  ) { }

  makeRequest() {
    this.httpApi.get().subscribe(
      data => {
        console.log('success');
        console.log('data', data.results);
        this.people = data.results;
      },
      err => {
        // Uh Oh
        console.log('err', err);
      },
      () => {
        console.log('complete');
      });
  }

  makeRequestToServer() {
    this.httpApi.getToServer().subscribe(
      data => {
        console.log('success');
        console.log('data', data.results);
        this.people = data.results;
      },
      err => {
        // Uh Oh
        console.log('err', err);
      },
      () => {
        console.log('complete');
      });
    console.log('HEY! PUCMM Server!!!');
  }

  takePicture() {
    // getPicture options
    let options = {
      quality: 75,
      //destinationType: Camera.DestinationType.FILE_URI,
      destinationType: Camera.DestinationType.DATA_URL,
      //sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
      sourceType: Camera.PictureSourceType.CAMERA,
      allowEdit: true,
      encodingType: Camera.EncodingType.JPEG,
      saveToPhotoAlbum: false
    };

    Camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      this.base64Image = "data:image/jpeg;base64," + imageData;
      // this.base64Image = imageData;
      this.makeRequestToServer();
      console.log('imgData', imageData);
      
      this.httpApi.post(imageData).subscribe(
        data => { console.log('POSTing on Server'); },
        err => {console.log('err', err);},
        () => { console.log('POSTed on Server'); }
      );

    }, (err) => {
      // Handle error
      console.log('err', err);
    });
  }
}
