import { Component } from '@angular/core';
import * as firebase from 'firebase/app';

import { Post } from './models/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /**
   * The connection to the *firebase backend* is setup and initialized.
   */
  constructor() {
    const config = {
      apiKey: "AIzaSyBrbfdmz5eukwJSR3KPbUh8_wMKx2zS9-Q",
      authDomain: "blog-manager-13f12.firebaseapp.com",
      databaseURL: "https://blog-manager-13f12.firebaseio.com",
      projectId: "blog-manager-13f12",
      storageBucket: "blog-manager-13f12.appspot.com",
      messagingSenderId: "889985866382"
    };

    firebase.initializeApp(config);
  }

}
