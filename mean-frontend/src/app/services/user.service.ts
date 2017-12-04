import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {User} from "../models/user.model";
import {AppSettings} from '../config/app.config';

@Injectable()
export class UserService {
  results: any;
  // private API_URL = 'http://localhost:3005/api';

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<any> {
    // console.log(AppSettings.API_URL);
    return this.http.get(AppSettings.API_URL+'/users');
  }

  saveUser(body) {
    let promise = new Promise((resolve, reject) => {
      let apiURL = AppSettings.API_URL+'/users';
      return this.http.post(apiURL,body)
          .toPromise()
          .then(
              res => { // Success
                resolve();
              },
              msg => { // Error
                reject(msg);
              }
          );
    });
    return promise;
  }

}

