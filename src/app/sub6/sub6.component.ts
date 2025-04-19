import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {mainlist} from '../main/mainlist';

@Component({
  selector: 'app-sub6',
    imports: [
        RouterLink
    ],
  templateUrl: './sub6.component.html',
  styleUrl: './sub6.component.css'
})

export class Sub6Component {

  protected readonly mainlist = mainlist;
}
