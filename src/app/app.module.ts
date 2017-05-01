import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { InterfaceServeurPage } from '../pages/interface-serveur/interface-serveur';
import { InterfaceClientPage } from '../pages/interface-client/interface-client';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    InterfaceServeurPage,
    InterfaceClientPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    InterfaceServeurPage,
    InterfaceClientPage

  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
