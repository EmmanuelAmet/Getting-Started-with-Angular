import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  msg = 'This is a cool video'
  getName(name: String | number){
    alert(name)
  }

  getData(value: any){
    console.warn(value)
  }

  displayValue :String = ""
  getValue(username: String){
    console.log(username)
    this.displayValue = username
  }

}
