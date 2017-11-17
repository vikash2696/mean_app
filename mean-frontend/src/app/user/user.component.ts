import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {User} from "../user.model";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[];

  constructor(private _userService: UserService) {

  }

  ngOnInit() {
  this._userService
      .getUsers()
      .subscribe(users => {
        this.users = users;
        console.log(this.users);
      }, err => {
         console.log(err);
      })
  }

}
