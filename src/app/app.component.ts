import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor() {
    // Normalement sensible à laisser dans un fichier public, mais là on s'en fout.
    const firebaseConfig = {
      apiKey: 'AIzaSyAgeHX1SaQqU8Z5S3yA5F8erQnldxkxf6Y',
      authDomain: 'open-classrooms-blog.firebaseapp.com',
      databaseURL: 'https://open-classrooms-blog.firebaseio.com',
      projectId: 'open-classrooms-blog',
      storageBucket: '',
      messagingSenderId: '9726146729',
      appId: '1:9726146729:web:1ace353230ac09cc'
    };
    firebase.initializeApp(firebaseConfig);
  }
}
