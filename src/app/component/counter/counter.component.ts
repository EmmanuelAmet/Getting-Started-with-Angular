import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  title = "Counter App";
  count = 0;

  counter(type: string){
    type === 'add' ? this.count++ : this.count--;
  }

}
