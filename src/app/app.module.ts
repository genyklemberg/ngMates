import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import {WindowTokenModule} from 'ngx-window-token';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AppComponent } from './app.component';
import { Footer } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import {Loading} from './shared/Loading';





const firebaseConfig = {
  apiKey: 'AIzaSyAKWKsfkn0x20xFKRrbUB8Ad1_lwIQ4RBk',
  authDomain: 'ngmates-2bcd1.firebaseapp.com',
  databaseURL: 'https://ngmates-2bcd1.firebaseio.com',
  projectId: 'ngmates-2bcd1',
  storageBucket: '',
  messagingSenderId: '1008786752200'
};

const APP_ID = 'landing3-dsl';

@NgModule({
  declarations: [
    AppComponent,
    Footer,
    NavigationComponent,
    Loading
  ],
  imports: [
    BrowserModule.withServerTransition({appId: APP_ID}),
    BrowserAnimationsModule,
    // WindowTokenModule,
    ScrollToModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
