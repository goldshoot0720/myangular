import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {mainlist} from '../main/mainlist';

@Component({
  selector: 'app-sub8',
    imports: [
        RouterLink
    ],
  templateUrl: './sub8.component.html',
  styleUrl: './sub8.component.css'
})
export class Sub8Component {

  protected readonly mainlist = mainlist;
}
