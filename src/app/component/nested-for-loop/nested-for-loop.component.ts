import { Component } from '@angular/core';

@Component({
  selector: 'app-nested-for-loop',
  templateUrl: './nested-for-loop.component.html',
  styleUrls: ['./nested-for-loop.component.css']
})
export class NestedForLoopComponent{
  user = [
    {name: 'Emmanuel', email: 'emmanuel@gmail.com', phone: '0234567856453', account: ['facebook', 'instagram', 'google']},
    {name: 'Stephan', email: 'emmanuel@gmail.com', phone: '0234567856453', account: ['facebook', 'instagram', 'google']},
    {name: 'Mike', email: 'emmanuel@gmail.com', phone: '0234567856453', account: ['facebook', 'instagram', 'google']},
    {name: 'Nathan', email: 'emmanuel@gmail.com', phone: '0234567856453', account: ['facebook', 'instagram', 'google']},
    {name: 'Henry', email: 'emmanuel@gmail.com', phone: '0234567856453', account: ['facebook', 'instagram', 'google']},
  ]
}
