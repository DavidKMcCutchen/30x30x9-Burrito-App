import { Component } from '@angular/core';

@Component({
  selector: 'burritos-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title= 'Burritos';
  links= [
    {path: '', icon: 'home', title: 'Home'},
    {path: 'burritos', icon: 'view_list', title: 'Burritos'}
  ]
}
