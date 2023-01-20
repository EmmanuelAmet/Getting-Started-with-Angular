import { Component } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent {
  title = 'Hello there';
  color = 'red';
  bgColor = 'red';

  updateColor(){
    this.color = 'green';
    this.bgColor = 'blue';
  }

}
