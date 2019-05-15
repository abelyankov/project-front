import { Injectable } from '@angular/core';
import { MainService } from './main.service';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../app/imodel';

@Injectable({
  providedIn: 'root'
})
export class ProviderService extends MainService  {

  constructor(http: HttpClient) {
    super(http);
  }

  auth(login: string, hey: string): Promise<IUser> {
    return this.post('http://127.0.0.1:8000/login/', {
      username: login,
      password: hey,
    });
  }

  logout(): Promise<any> {
    return this.post('http://127.0.0.1:8000/logout/', {});
  }
}
