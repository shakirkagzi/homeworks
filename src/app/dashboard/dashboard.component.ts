import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  imageUrl  = 'https://miro.medium.com/max/560/1*fIY4dIvymVxVHKHV5NNRNw.png';
  public name = 'Shakir';
  public title = 'Home page';
  isAuthenticate = true;
  isActive = true;
  public duration = 10;
  public text = 'I am from type script class';
  public userid = 'Username';
  public password = 'Password';
  public email = 'email';
  actionName = 'Aria Enhancement';
  destinationUrl = 'https://google.com';
  alternativeUrl = 'https:yahoo.com';
  public username: any;
  public isSpecial = false;
  public clickCounter = 0;

  constructor() { }

  ngOnInit(): void {
    console.log('Current value of username-- ', this.username);
  }
  onClick(): void {
    this.clickCounter ++;
    console.log('User just clicked');
  }
  toggleColor(): void {
    console.log('Inside the toggleColor');
  }
  onKeyPressed(event: any): void {
      console.log('User pressed the Key!', event.key);
  }
}
