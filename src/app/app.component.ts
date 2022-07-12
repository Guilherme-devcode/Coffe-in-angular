import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  colors: string[] = [
    '#b3478c', '#1e62c0', '#ffa764', '#3de68b', '#a11f2a', '#ffbf00', '#1f1f1f', '#EFEFEFEF'
  ];
  
  selectedColor = this.colors[0];

}
