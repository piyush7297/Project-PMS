import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/Home/home/home.component';
import { AddproductComponent } from './Component/Addproudct/addproduct/addproduct.component';
import { AddteamComponent } from './Component/Addteam/addteam/addteam.component';
import { ViewteamComponent } from './Component/ViewTeam/viewteam/viewteam.component';
import { ViewproductComponent } from './Component/ViewProduct/viewproduct/viewproduct.component';
import { ViewmemberComponent } from './Pages/ViewMember/viewmember/viewmember.component';
import { ViewprojectComponent } from './Pages/ViewProject/viewproject/viewproject.component';
import { AboutprojectsComponent } from './Component/AboutProjects/aboutprojects/aboutprojects.component';
import { PendingComponent } from './Pages/Status/pending/pending.component';
import { CompletedComponent } from './Pages/Status/completed/completed.component';
import { AddtaskComponent } from './Component/Task/addtask/addtask.component';
import { ViewtaskComponent } from './Pages/ViewTasks/viewtask/viewtask.component';
import { ErrorpageComponent } from './Pages/Error/errorpage/errorpage.component';
import { DashboardComponent } from './Pages/Dashboard/dashboard/dashboard.component';
import { TaskdetailComponent } from './Pages/TaskDetail/taskdetail/taskdetail.component';
import { ProfileComponent } from './Pages/Profile/profile/profile.component';

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
    path : 'project/addproject',
    component:AddproductComponent
  },
  {
    path : 'project/viewproject',
    component: ViewproductComponent
  },
  {
    path : 'project/viewproject/:id',
    component: ViewprojectComponent
  },
  {
    path : 'team/addteam',
    component:AddteamComponent
  },
  {
    path : 'team/viewteam',
    component:ViewteamComponent
  },
  {
    path : 'team/viewteam/:id',
    component:ViewteamComponent
  },
  {
    path : 'team/viewmember/:id',
    component: ViewmemberComponent
  },
  {
    path : 'project/projectstatus/pending',
    component: PendingComponent
  },
  {
    path : 'project/projectstatus/completed',
    component: CompletedComponent
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
