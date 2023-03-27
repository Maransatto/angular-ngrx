import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ingredients?: any[] = [
    { name: 'Apples', amount: 5 },
    { name: 'Tomatoes', amount: 10 },
  ]
}
