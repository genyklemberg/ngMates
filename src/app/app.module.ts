import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AppComponent } from './app.component';
import { Footer } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';

export const firebaseConfig = {
  apiKey: "AIzaSyAKWKsfkn0x20xFKRrbUB8Ad1_lwIQ4RBk",
  authDomain: "ngmates-2bcd1.firebaseapp.com",
  databaseURL: "https://ngmates-2bcd1.firebaseio.com",
  projectId: "ngmates-2bcd1",
  storageBucket: "",
  messagingSenderId: "1008786752200"
};

@NgModule({
  declarations: [
    AppComponent,
    Footer,
    HomeComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'landing3-dsl'}),
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
