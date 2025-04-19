import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {mainlist} from '../main/mainlist';

@Component({
  selector: 'app-sub3',
  imports: [
    RouterLink
  ],
  templateUrl: './sub3.component.html',
  styleUrl: './sub3.component.css'
})
export class Sub3Component {

  protected readonly mainlist = mainlist;
}
