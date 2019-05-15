import { Injectable } from '@angular/core';
import { MainService } from './main.service';
import {HttpClient, HttpParams} from '@angular/common/http';
import {IUser, ITasks, ITaskDetail, ITaskExecute, IBar, IAssignee} from '../app/imodel';

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

  getTasks(): Promise<ITasks[]> {
    return this.get('http://127.0.0.1:8000/tasks/', {});
  }

  getMyTasks(id: number): Promise<ITasks[]> {
    return this.get('http://127.0.0.1:8000/userTasks/?userId=' + id, {});
  }

  createTask(t: any, d: any, a: any): Promise<ITasks> {
    return this.post('http://127.0.0.1:8000/tasks/', {
      title: t, description: d, address: a, duration: 1, created_by: 1, status: 2
    });
  }

  getTasksDetail(id: number): Promise<ITaskDetail> {
    return this.get(`http://127.0.0.1:8000/taskList/${id}/`, {});
  }

  getBARs(): Promise<IBar[]> {
    return this.get('http://127.0.0.1:8000/BecomeAssigneeRequests/', {});

  }

  postAssignee(phoneNumber: number, address: string, bin: string, user: number): Promise<IAssignee> {
    return this.post('http://127.0.0.1:8000/assignees/', {
      phoneNumber: phoneNumber, bin: bin, address: address, user: user, rating: 0, tasks: []
    });
  }

  postExecuteTask(task_id: number, user_id: number): Promise<ITaskExecute> {
    return this.put(`http://127.0.0.1:8000/executeTask/?userId=` + user_id + '&taskId=' + task_id , {});
  }

  updateTask(id: number,t: any, d: any, a: any): Promise<ITasks> {
    return this.put(`http://127.0.0.1:8000/taskList/${id}`, {
      title: t, description: d, address: a, duration: 1, status: 2
    });
  }

  deleteTask(id: number): Promise<ITaskDetail> {
    return this.delet(`http://127.0.0.1:8000/taskList/${id}/`, {});
  }

}
