import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {mainlist} from '../main/mainlist';

@Component({
  selector: 'app-sub9',
    imports: [
        RouterLink
    ],
  templateUrl: './sub9.component.html',
  styleUrl: './sub9.component.css'
})

export class Sub9Component {

  protected readonly mainlist = mainlist;
}
