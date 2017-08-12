import { Component } from '@angular/core';
import { NavController, NavParams , AlertController} from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { RequestsProvider } from '../../providers/requests/requests';
import { connreq } from '../../models/interfaces/request';
import firebase from 'firebase';
/**
 * Generated class for the BuddiesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-buddies',
  templateUrl: 'buddies.html',
})
export class BuddiesPage {
  newrequest = {} as connreq;
  temparr = [];
  filteredusers = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public userservice: UserProvider , public requestservice: RequestsProvider ,
              public alertCtrl: AlertController) {
    this.userservice.getallusers().then((res: any) => {
      this.filteredusers = res;
      this.temparr = res;
   })
  }
 
  ionViewDidLoad() {
 
  }
 searchuser(searchbar) {
    var q = searchbar.target.value;
    if (q.trim() == '') {
      this.filteredusers = this.temparr;
      return;
    }
 
    this.filteredusers = this.temparr.filter((v) => {
      if (v.displayName.toLowerCase().indexOf(q.toLowerCase()) > -1) {
        return true;
      }
      return false;
    })
  }
    sendreq(recipient) {
        this.newrequest.sender = firebase.auth().currentUser.uid;
        this.newrequest.recipient = recipient.uid;
        if (this.newrequest.sender === this.newrequest.recipient)
          alert('You are your friend always');
        else {
          let successalert = this.alertCtrl.create({
            title: 'Request sent',
            subTitle: 'Your request was sent to ' + recipient.displayName,
            buttons: ['ok']
          });
        
          this.requestservice.sendrequest(this.newrequest).then((res: any) => {
            if (res.success) {
              successalert.present();
              let sentuser = this.filteredusers.indexOf(recipient);
              this.filteredusers.splice(sentuser, 1);
            }
          }).catch((err) => {
            alert(err);
          })
        }
  }
 
}