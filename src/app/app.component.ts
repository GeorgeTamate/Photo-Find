import { Component } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';

import { SimpleHttp } from '../shared/services/include'


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  authenticated: boolean = false;
  rootPage = TabsPage;

  constructor(
    platform: Platform,
    public menuCtrl: MenuController,
    public httpApi: SimpleHttp
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();

      console.log('Hello from TypeScript');
    });
  }

  openMenu() {
   this.menuCtrl.open();
 }

 closeMenu() {
   this.menuCtrl.close();
 }

 toggleMenu() {
   this.menuCtrl.toggle();
 }

 enableAuthenticatedMenu() {
  this.menuCtrl.enable(this.authenticated, 'authenticated');
  this.menuCtrl.enable(!this.authenticated, 'unauthenticated');
}

logInToFacebook() {
  this.authenticated = true;
  this.menuCtrl.close('unauthenticated');
  this.enableAuthenticatedMenu();
  console.log('Logging In!');
}

logOutFromFacebook() {
  this.authenticated = false;
  this.menuCtrl.close('authenticated');
  this.enableAuthenticatedMenu();
  console.log('Logging Out!');
}

}
