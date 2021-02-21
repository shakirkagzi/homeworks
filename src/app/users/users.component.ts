import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UserService } from '../user.service';
import {IProduct, IUser} from '../models/interfaces';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public userList:IUser[] = [];

  constructor(private _router: Router, private _userService:UserService) { }

  ngOnInit(): void {
    this._userService.getProducts().subscribe((data) => {
      this.userList = data;
    });
  }

  navigateToDashboard(){
    this._router.navigate(['dashboard']);
  }

}
