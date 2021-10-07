import { Component } from '@angular/core';
//import * as firebase from 'firebase'
import firebase from 'firebase/app';
//import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBeRZX8ixxLK7IM-VYokTZ-ZW_AthSYMDE",
  authDomain: "erp-document.firebaseapp.com",
  projectId: "erp-document",
  storageBucket: "erp-document.appspot.com",
  messagingSenderId: "289446363125",
  appId: "1:289446363125:web:72234e71f47d72870b2abc",
  measurementId: "G-E1HSL6N6B8"
};
 //var app = firebase.initializeApp(firebaseConfig);
 if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}else {
  firebase.app(); // if already initialized, use that one
}
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Records', url: '/records', icon: 'mail' },
    { title: 'Dashboard', url: '/dashboard', icon: 'paper-plane' },
    
    { title: 'Print', url: '/print', icon: 'paper-plane' }
  ];
//  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
