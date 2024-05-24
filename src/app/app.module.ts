import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/Home/home/home.component';
import { HeaderComponent } from './Shared/Header/header/header.component';
import { SidenavComponent } from './Shared/SideNav/sidenav/sidenav.component';
import { MainComponent } from './Component/Main/main/main.component';
import { AddproductComponent } from './Component/Dialogs/Addproudct/addproduct/addproduct.component';
import { AddteamComponent } from './Component/Dialogs/Addteam/addteam/addteam.component';
import { ViewproductComponent } from './Component/ViewProduct/viewproduct/viewproduct.component';
import { ViewteamComponent } from './Component/ViewTeam/viewteam/viewteam.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ViewmemberComponent } from './Pages/ViewMember/viewmember/viewmember.component';
import { ViewprojectComponent } from './Pages/ViewProject/viewproject/viewproject.component';
import { TopmembersComponent } from './Component/TopMember/topmembers/topmembers.component';
import { SearchComponent } from './Shared/Searchbar/search/search.component';
import { MaterialModule } from './material/material.module';
import { AboutprojectsComponent } from './Component/AboutProjects/aboutprojects/aboutprojects.component';
import { PendingComponent } from './Pages/Status/pending/pending.component';
import { CompletedComponent } from './Pages/Status/completed/completed.component';
import { OurteamComponent } from './Component/OurTeam/ourteam/ourteam.component';
import { TeammodelComponent } from './Component/Dialogs/teammodel/teammodel.component';
import { DeletecomponentComponent } from './Component/Dialogs/deletedialog/deletecomponent.component';
import { AddtaskComponent } from './Component/Dialogs/addtask/addtask.component';
import { ViewtaskComponent } from './Pages/ViewTasks/viewtask/viewtask.component';
import { ErrorpageComponent } from './Pages/Error/errorpage/errorpage.component';
import { DashboardComponent } from './Pages/Dashboard/dashboard/dashboard.component';
import { TaskdetailComponent } from './Pages/TaskDetail/taskdetail/taskdetail.component';
import { ProfileComponent } from './Pages/Profile/profile/profile.component';
import { TaskteammodelComponent } from './Component/AllTeam/TaskTeam/taskteammodel/taskteammodel.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { CalendarComponent } from './Component/Calendar/calendar/calendar.component';
import { UpdatetaskComponent } from './Component/Dialogs/UpdateDialogs/updatetask/updatetask.component';
import { UpdateteamComponent } from './Component/Dialogs/UpdateDialogs/updateteam/updateteam.component';
import { UpdateprojectComponent } from './Component/Dialogs/UpdateDialogs/updateproject/updateproject.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SidenavComponent,
    MainComponent,
    AddproductComponent,
    AddteamComponent,
    ViewproductComponent,
    ViewteamComponent,
    ViewmemberComponent,
    ViewprojectComponent,
    TopmembersComponent,
    SearchComponent,
    AboutprojectsComponent,
    PendingComponent,
    CompletedComponent,
    OurteamComponent,
    TeammodelComponent,
    DeletecomponentComponent,
    AddtaskComponent,
    ViewtaskComponent,
    ErrorpageComponent,
    DashboardComponent,
    TaskdetailComponent,
    ProfileComponent,
    TaskteammodelComponent,
    CalendarComponent,
    UpdatetaskComponent,
    UpdateteamComponent,
    UpdateprojectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA ,  NO_ERRORS_SCHEMA],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
