import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";
import {User} from "../models/user.model";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {DataTableModule,SharedModule} from 'primeng/primeng';
import {Header} from 'primeng/primeng';
import {Footer} from 'primeng/primeng';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User;
  showDiv: boolean = false;
  public registerForm: FormGroup;
  cols: any[];
  loading: boolean;
 
  constructor(
    private userService: UserService,
    private fb: FormBuilder
  ) {
  
  }

  ngOnInit() {
  //this.createForm();
  this.getUserData();
  
  }
  //Register form 
  createForm() {
    console.log("here",this.users);
    this.registerForm = this.fb.group({
      name: [this.users.name,Validators.required],
      address: [this.users.address,Validators.required],
      city: [this.users.city,Validators.required]
    });
   
  }
  //Open register form div element
  openFormTest() {
    this.showDiv = true;
    this.createForm();
  }
  //Close register form div element
  HideRegisterForm() {
    this.showDiv = false;
  }
  //Get all registerd users
  getUserData() {
    this.userService
      .getUsers()
      .subscribe(users => {
        this.users = users;
        this.loading = true;
        this.cols = [
          {field: 'name', header: 'Name'},
          {field: 'address', header: 'Address'},
          {field: 'city', header: 'City'},
        ];
        console.log(this.users);
      }, err => {
         console.log(err);
      })
  }
  //save data
  registerData() {
      this.userService.saveUser(this.registerForm.value).then(
      (response) => {
        if (response) {
          this.getUserData();
        }
      });
  }
  //Openb Edit form
  userEdit(user, i) {
    this.showDiv = true;
    // this.users = user[i];
    this.createForm.bind;
}

}
