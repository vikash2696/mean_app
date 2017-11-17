import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {User} from "./user.model";

@Injectable()
export class UserService {

  private API_URL = 'http://localhost:3005/api';

  constructor(private _http: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this._http.get<User[]>(`${this.API_URL}/users`);
  }


}

