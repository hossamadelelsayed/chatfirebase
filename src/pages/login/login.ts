import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {usercreds} from "../../models/interfaces/usercreds";
import {AuthProvider} from "../../providers/auth/auth";
import {TabsPage} from "../tabs/tabs";

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public credentials = {} as usercreds ;
  constructor(public navCtrl: NavController, public navParams: NavParams ,
              public authProvider : AuthProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  signin(){
    this.authProvider.login(this.credentials).then((res )=>{
       this.navCtrl.setRoot(TabsPage);
    }).catch((res)=>{
      alert(res);
    });
  }
}
