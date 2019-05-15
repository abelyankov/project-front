import { Component, OnInit } from '@angular/core';
import {IAssignee, IBar} from '../imodel';
import {ProviderService} from '../provider.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-become-assignees-request',
  templateUrl: './become-assignees-request.component.html',
  styleUrls: ['./become-assignees-request.component.css']
})
export class BecomeAssigneesRequestComponent implements OnInit {
  public bars: IBar[] = [];
  public assiggnees: IAssignee[] = [];
  public isLogged = false;
  public showAllRow = false;

  constructor(private provider: ProviderService,  private router: Router ) { }

  ngOnInit() {
    const token = localStorage.getItem('token');
    const user_type = localStorage.getItem('user_type');
    if (token) {
      this.isLogged = true;
      if (user_type === 'experts') {
        this.showAllRow = true;
      }
    }
    if (this.isLogged) {
      this.getBars();
    }
  }

  getBars() {
    this.provider.getBARs().then(res => {
      this.bars = res;
    });
  }

  createAssignee(phoneNumber: number, address: string, bin: string, user: number) {
    this.provider.postAssignee(phoneNumber, address, bin, user).then(res => {
      this.assiggnees.push(res);
      alert(this.assiggnees);
    });
  }
}
