import { Component } from '@angular/core';

@Component({
  selector: 'app-loop',
  templateUrl: './loop.component.html',
  styleUrls: ['./loop.component.css']
})
export class LoopComponent {

  users = ['Emmanuel', 'Nathan', 'Stephan', 'Mike', 'Henry']
  userDetails = [
    {name: 'Emmanuel', email: 'emmanuel@gmail.com', phone: '0234567856453'},
    {name: 'Nathan', email: 'nathan@gmail.com', phone: '0234567856453'},
    {name: 'Stephan', email: 'stephan@gmail.com', phone: '0234567856453'},
    {name: 'Mike', email: 'mike@gmail.com', phone: '0234567856453'},
    {name: 'Henry', email: 'henry@gmail.com', phone: '0234567856453'},
  ]
}
