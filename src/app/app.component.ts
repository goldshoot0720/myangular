import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MainComponent} from './main/main.component';

@Component({
  selector: 'app-root',
  imports: [RouterModule,MainComponent],  // 確保 My0000Component 正確匯入
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],  // 修正 styleUrls
  standalone: true,
})

export class AppComponent {
  title = 'my-app';
}
