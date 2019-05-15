import { Component, OnInit } from '@angular/core';
import {ITaskDetail} from '../imodel';
import {ProviderService} from '../provider.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-taskdetail',
  templateUrl: './taskdetail.component.html',
  styleUrls: ['./taskdetail.component.css']
})
export class TaskdetailComponent implements OnInit {

  public tasks: ITaskDetail[] = [];

  public id: number;
  public user = '';
  public isLogged = false;
  public showAllRow = false;

  constructor(
    private provider: ProviderService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    // tslint:disable-next-line:radix
    const token = localStorage.getItem('token');
    const user_type = localStorage.getItem('user_type');
    if (token) {
      this.isLogged = true;
      if (user_type === 'experts') {
        this.showAllRow = true;
      }
    }
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    if (this.id) {
      this.provider.getTasksDetail(this.id).then(res => {
        this.tasks = res;
      });
    }
  }

  postExecuteTask() {
    this.user = localStorage.getItem('user_id');
    this.provider.postExecuteTask( this.id, this.user).then(res => {
      this.router.navigate(['/my_tasks']);
    });
  }

  deleteTask() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.provider.deleteTask(this.id).then(res => {
      this.router.navigate(['/tasks']);
    });
  }

  updateTask() {
    if (this.title !== '') {
      this.id = parseInt(this.route.snapshot.paramMap.get('id'));
      this.provider.updateTask(this.id, this.title, this.description, this.address).then(res => {
        this.title = '';
        this.description = '';
        this.address = '';
        this.tasks.push(res);
        this.router.navigate(['/tasks']);
      });
    }
  }
}
