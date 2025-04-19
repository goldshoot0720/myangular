import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {mainlist} from "../main/mainlist";

@Component({
  selector: 'app-sub1',
  imports: [
    RouterLink
  ],
  templateUrl: './sub1.component.html',
  styleUrl: './sub1.component.css'
})
export class Sub1Component {

  protected readonly mainlist = mainlist;
}
