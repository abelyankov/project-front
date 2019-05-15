import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent} from './login/login.component';
import {TasksComponent} from './tasks/tasks.component';
import {TaskcreationComponent} from './taskcreation/taskcreation.component';
import {TaskdetailComponent} from './taskdetail/taskdetail.component';
import {BecomeAssigneesRequestComponent} from './become-assignees-request/become-assignees-request.component';
import {MytasksComponent} from './mytasks/mytasks.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'login', component: LoginComponent},
  {path: 'tasks', component: TasksComponent},
  {path: 'tasks/new', component: TaskcreationComponent},
  {path: 'tasks/:id', component: TaskdetailComponent},
  {path: 'assignees_requests', component: BecomeAssigneesRequestComponent},
  {path: 'my_tasks', component: MytasksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
