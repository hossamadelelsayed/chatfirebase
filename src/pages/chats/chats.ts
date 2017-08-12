import { Component } from '@angular/core';
import { NavController, NavParams , AlertController ,  Events } from 'ionic-angular';
import {BuddiesPage} from "../buddies/buddies";
import { BuddychatPage} from "../buddychat/buddychat";
import { RequestsProvider } from '../../providers/requests/requests';
import { ChatProvider } from '../../providers/chat/chat';

/**
 * Generated class for the ChatsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-chats',
  templateUrl: 'chats.html',
})
export class ChatsPage {
  myrequests;
  myfriends; 
  constructor(public navCtrl: NavController, public navParams: NavParams , public events: Events,
            public requestservice: RequestsProvider , public alertCtrl : AlertController ,
            public chatservice : ChatProvider) {
  }
  ionViewWillEnter() {
    this.requestservice.getmyrequests();
    this.requestservice.getmyfriends();
    this.myfriends = [];
    this.events.subscribe('gotrequests', () => {
      this.myrequests = [];
      this.myrequests = this.requestservice.userdetails;
    })
    this.events.subscribe('friends', () => {
      this.myfriends = [];
      this.myfriends = this.requestservice.myfriends; 
    })
  }
addbuddy() {
    this.navCtrl.push(BuddiesPage);
  }
  accept(item) {
    this.requestservice.acceptrequest(item).then(() => {
 
      let newalert = this.alertCtrl.create({
        title: 'Friend added',
        subTitle: 'Tap on the friend to chat with him',
        buttons: ['Okay']
      });
      newalert.present();
    })
  }
 
  ignore(item) {
    this.requestservice.deleterequest(item).then(() => {
       alert('Request ignored');
    }).catch((err) => {
      alert(err);
    })
  }
  buddychat(buddy) {
    this.chatservice.initializebuddy(buddy);
    this.navCtrl.push(BuddychatPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatsPage');
  }

}
