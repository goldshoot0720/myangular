import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {mainlist} from '../main/mainlist';

@Component({
  selector: 'app-sub11',
    imports: [
        RouterLink
    ],
  templateUrl: './sub11.component.html',
  styleUrl: './sub11.component.css'
})
export class Sub11Component {

  protected readonly mainlist = mainlist;
}
