import { Component, OnInit } from '@angular/core';
import {ProviderService} from '../provider.service';
import {Router} from '@angular/router';
import {IStatus, ITasks} from '../imodel';

@Component({
  selector: 'app-taskcreation',
  templateUrl: './taskcreation.component.html',
  styleUrls: ['./taskcreation.component.css']
})
export class TaskcreationComponent implements OnInit {

  public isLogged = false;
  public title: any = '';
  public description: any = '';
  public address: any = '';
  public showAllRow = false;
  public tasks: ITasks[] = [];
  constructor(private provider: ProviderService) { }

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
      this.createTask();
    }
  }

  createTask() {
    if (this.title !== '') {
      this.provider.createTask(this.title, this.description, this.address).then(res => {
        this.title = '';
        this.description = '';
        this.address = '';
        this.tasks.push(res);
      });
    }
  }
}
