import { BrowserModule } from '@angular/platform-browser';
import {ClassProvider, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { TasksComponent } from './tasks/tasks.component';
import { BarComponent } from './bar/bar.component';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from './AuthInterceptor';
import {ProviderService} from './provider.service';
import { TaskcreationComponent } from './taskcreation/taskcreation.component';
import { TaskdetailComponent } from './taskdetail/taskdetail.component';
import { BecomeAssigneesRequestComponent } from './become-assignees-request/become-assignees-request.component';
import { RegistrationComponent } from './registration/registration.component';
import { MytasksComponent } from './mytasks/mytasks.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    LoginComponent,
    TasksComponent,
    BarComponent,
    TaskcreationComponent,
    TaskdetailComponent,
    BecomeAssigneesRequestComponent,
    MytasksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ ProviderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    } as ClassProvider ],
  bootstrap: [AppComponent]
})
export class AppModule { }
