import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { config } from './app.firebaseconfig';

import { MyApp } from './app.component';
import {LoginPage} from "../pages/login/login";
import {AngularFireModule} from "angularfire2";
import {AngularFireAuth} from "angularfire2/auth/auth";
import { AuthProvider } from '../providers/auth/auth';
import {TabsPage} from "../pages/tabs/tabs";
import {ChatsPage} from "../pages/chats/chats";
import {GroupsPage} from "../pages/groups/groups";
import {ProfilePage} from "../pages/profile/profile";
import { UserProvider } from '../providers/user/user';
import {SignupPage} from "../pages/signup/signup";
import {ProfilepicPage} from "../pages/profilepic/profilepic";
import {PasswordresetPage} from "../pages/passwordreset/passwordreset";
import { ImghandlerProvider } from '../providers/imghandler/imghandler';
import {File} from "@ionic-native/file";
import {FilePath} from "@ionic-native/file-path";
import {FileChooser} from "@ionic-native/file-chooser";

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    TabsPage ,
    ChatsPage ,
    GroupsPage ,
    ProfilePage ,
    SignupPage ,
    ProfilepicPage ,
    PasswordresetPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{tabsPlacement : 'top'}) ,
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage ,
    TabsPage ,
    ChatsPage ,
    GroupsPage ,
    ProfilePage ,
    SignupPage ,
    ProfilepicPage ,
    PasswordresetPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler} ,
    AngularFireAuth,
    AuthProvider,
    UserProvider,
    ImghandlerProvider ,
    File ,
    FilePath ,
    FileChooser
  ]
})
export class AppModule {}
