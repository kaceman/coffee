import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { InterfaceServeurPage } from '../interface-serveur/interface-serveur';
import { InterfaceClientPage } from '../interface-client/interface-client'

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  interfaceServeur = InterfaceServeurPage;
  interfaceClient = InterfaceClientPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
showAlert() {
  
    let alert = this.alertCtrl.create({
      title: '<font color=#ffffff>Appelez les numeros suivants :</font>',
      subTitle: '<font color=#ffffff>Tél 1: 0600000000 <br/> Tél 2: 0600000000 <br/>Tél 3: 0600000000 </font>',
      buttons: ['OK']
      
    });
    alert.present();
  }
}
