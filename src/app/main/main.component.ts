import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import { mainlist } from './mainlist';

@Component({
  selector: 'app-main',
    imports: [
        RouterLink
    ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})

export class MainComponent {
  protected readonly mainlist = mainlist;
}
