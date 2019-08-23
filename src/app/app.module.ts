import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireDatabaseModule, AngularFireModule.initializeApp({
      apiKey: "AIzaSyBWzJ_lIPYDNaRB30ZcK5fDbJTcPuftIvE",
      authDomain: "invecampo.firebaseapp.com",
      databaseURL: "https://invecampo.firebaseio.com",
      projectId: "invecampo",
      storageBucket: "",
      messagingSenderId: "47318991430",
      appId: "1:47318991430:web:ae7162dbdb61792b"
    })],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
