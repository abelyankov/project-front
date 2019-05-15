import { Component, OnInit } from '@angular/core';
import {ProviderService} from '../provider.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user = '';
  public isLogged = false;
  public login = '';
  public password = '';

  constructor(
    private provider: ProviderService, private router: Router) { }

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.isLogged = true;
    }
    if (this.isLogged) {
      this.router.navigate(['/tasks']);
    }
  }

  auth() {
    if (this.login !== '' && this.password !== '') {
      this.provider.auth(this.login, this.password).then(res => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('user_type', res.user_type);
        localStorage.setItem('user_id', String(res.user_id));
        this.isLogged = true;
        this.router.navigate(['/tasks']);
        if (res.user_type === 'expert') {
        }
      });
    }
  }

  logout() {
    this.provider.logout().then(res => {
      this.isLogged = false;
      localStorage.clear();
    });
  }

}
