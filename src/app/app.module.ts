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

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp) ,
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage ,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler} ,
    AngularFireAuth,
    AuthProvider
  ]
})
export class AppModule {}
