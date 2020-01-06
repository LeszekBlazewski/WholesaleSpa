import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { User } from '../models/User';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private baseService: BaseService) {
  }

  postUserRegister(user: User): Observable<boolean> {
    const url = environment.usersUrl + environment.userRegisterUrl;
    return this.baseService.post(url, user)
  }

  postUserLogin(user: User): Observable<User> {
    const url = environment.usersUrl + environment.userLoginUrl;
    return this.baseService.post(url, user)
  }

  getUserDetails(userId: number): Observable<User> {
    const url = environment.usersUrl + userId.toString();
    return this.baseService.get(url);
  }
}
