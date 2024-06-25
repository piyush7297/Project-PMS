import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/Home/home/home.component';
import { ViewteamComponent } from './Component/ViewTeam/viewteam/viewteam.component';
import { ViewproductComponent } from './Component/ViewProduct/viewproduct/viewproduct.component';
import { ViewmemberComponent } from './Pages/ViewMember/viewmember/viewmember.component';
import { ViewprojectComponent } from './Pages/ViewProject/viewproject/viewproject.component';
import { AddtaskComponent } from './Component/Dialogs/addtask/addtask.component';
import { ViewtaskComponent } from './Pages/ViewTasks/viewtask/viewtask.component';
import { ErrorpageComponent } from './Pages/Error/errorpage/errorpage.component';
import { TaskdetailComponent } from './Pages/TaskDetail/taskdetail/taskdetail.component';
import { ProfileComponent } from './Pages/Profile/profile/profile.component';
import { CalendarComponent } from './Component/Calendar/calendar/calendar.component';

const routes: Routes = [
  {
    path : '',
    component:HomeComponent
  },
  // {
  //   path : 'dashboard',
  //   component: DashboardComponent
  // },
  {
    path : 'project',
    component: ViewproductComponent
  },
  {
    path : 'project/:id',
    component: ViewprojectComponent
  },
  {
    path : 'team',
    component:ViewteamComponent
  },
  {
    path : 'team/:id',
    component: ViewmemberComponent
  },
  {
    path : 'addtask',
    component: AddtaskComponent
  },
  {
    path : 'viewtask',
    component: ViewtaskComponent
  },
  {
    path : 'viewtask/:id',
    component: TaskdetailComponent
  },
  {
    path : 'calendar',
    component: CalendarComponent
  },
  {
    path : 'profile',
    component: ProfileComponent
  },
  {
    path : '**',
    component: ErrorpageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
