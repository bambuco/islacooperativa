import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {
  }

  ionViewDidEnter() {
  }

  play(sea) {
  	this.navCtrl.setRoot('GamePage', {sea: sea});
  }
}
