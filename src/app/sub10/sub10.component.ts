import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {mainlist} from '../main/mainlist';

@Component({
  selector: 'app-sub10',
  imports: [
    RouterLink
  ],
  templateUrl: './sub10.component.html',
  styleUrl: './sub10.component.css'
})
export class Sub10Component {

  protected readonly mainlist = mainlist;
}
