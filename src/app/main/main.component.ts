import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import { mainlist } from './mainlist';
import {MatButton} from '@angular/material/button';
import JSConfetti from 'js-confetti';

@Component({
  selector: 'app-main',
  imports: [
    RouterLink,
    MatButton,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})

export class MainComponent implements OnInit {
  protected readonly mainlist = mainlist;

  ngOnInit() {
    const jsConfetti = new JSConfetti()
    jsConfetti.addConfetti()
  }
}
