import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-element',
  templateUrl: './toggle-element.component.html',
  styleUrls: ['./toggle-element.component.css']
})
export class ToggleElementComponent {
  display = true;

  toggle(){
    this.display = !this.display;
  }
}
