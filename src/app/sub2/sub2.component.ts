import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {mainlist} from '../main/mainlist';

@Component({
  selector: 'app-sub2',
  imports: [
    RouterLink
  ],
  templateUrl: './sub2.component.html',
  styleUrl: './sub2.component.css'
})
export class Sub2Component {

  protected readonly mainlist = mainlist;
}
