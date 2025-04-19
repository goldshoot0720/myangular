import { Component } from '@angular/core';
import {My0000Component} from './my0000/my0000.component';

@Component({
  selector: 'app-root',
  imports: [My0000Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
