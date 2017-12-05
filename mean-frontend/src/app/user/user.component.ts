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
  user: User;
  showDiv: boolean = false;
  save: boolean = false;
  update: boolean = false;
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
  createForm(index:number=-1) {
    if(index>-1)
      { 
      this.save = false;
      this.update = true;
      this.registerForm = this.fb.group({
      name: [this.user.name,Validators.required],
      address: [this.user.address,Validators.required],
      city: [this.user.city,Validators.required],
      _id: [this.user._id]
    });
      }
  else
    {
      this.save = true;
      this.update = false;
      this.registerForm = this.fb.group({
      name: ['',Validators.required],
      address: ['',Validators.required],
      city: ['',Validators.required],
      _id: ['']
      });
     
    }
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
        this.cols = [
          {field: 'name', header: 'Name'},
          {field: 'address', header: 'Address'},
          {field: 'city', header: 'City'},
          {field: '_id', header: 'Id'}
        ];
      }, err => {
         console.log(err);
      })
  }
  //save data
  registerData() {
    // console.log("update data",this.registerForm.value);
    if(this.registerForm.value._id) {
      this.userService.updateUser(this.registerForm.value).then(
      (response) => {
        if (response) {
          this.getUserData();
        }
      });
    }else{
      this.userService.saveUser(this.registerForm.value).then(
      (response) => {
        if (response) {
          this.getUserData();
        }
      });
    }
  }
  //Openb Edit form
  userEdit(user, i) {
    this.showDiv = true;
    this.user = user;
    this.createForm(i);
}
}
