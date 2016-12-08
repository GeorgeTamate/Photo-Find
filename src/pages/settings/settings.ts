import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { AboutPage } from '../about/about';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  constructor(public navCtrl: NavController) {

  }

  pushAboutPage(){
    // push another page on to the navigation stack
    // causing the nav controller to transition to the new page
    // optional data can also be passed to the pushed page.
    this.navCtrl.push(AboutPage, {
    });
  }

  popThisPage(){
     this.navCtrl.pop();
   }

}