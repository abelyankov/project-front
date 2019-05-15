import { Component, OnInit } from '@angular/core';
import {ITasks} from '../imodel';
import {ProviderService} from '../provider.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mytasks',
  templateUrl: './mytasks.component.html',
  styleUrls: ['./mytasks.component.css']
})
export class MytasksComponent implements OnInit {

  public mytasks: ITasks[] = [];
  public isLogged = false;
  public id = '';
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
      this.getMyTasks();
    }
  }

  getMyTasks() {
    this.id = localStorage.getItem('user_id');
    this.provider.getMyTasks(this.id).then(res => {
      this.mytasks = res;
    });
  }

}
