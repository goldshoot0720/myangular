import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {mainlist} from '../main/mainlist';
import {sub3data3} from './sub3data3';
import {sub3data7} from './sub3data7';
import {NgForOf} from '@angular/common';
import {MatCardModule, MatCardContent, MatCardHeader} from '@angular/material/card';

@Component({
  selector: 'app-sub3',
  imports: [
    RouterLink,
    NgForOf,
    MatCardModule,
    MatCardHeader,
    MatCardContent
  ],
  templateUrl: './sub3.component.html',
  styleUrl: './sub3.component.css'
})

export class Sub3Component {

  protected readonly mainlist = mainlist;
  protected readonly sub3data3 = sub3data3;
  protected readonly sub3data7 = sub3data7;
}
