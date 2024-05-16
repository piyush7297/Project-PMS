import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/Services/Project/project.service';
import { TaskService } from 'src/app/Services/Task/task.service';
import { TeamService } from 'src/app/Services/Team/team.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  allteam : any ;
  teamLength : number = 0;
  allprojects : any;
  taskLength : number = 0;
  pendingTask : number = 0;
  completedTask : number = 0;
  projectLength:number = 0;
  constructor(private teamService : TeamService , private projectService : ProjectService , private taskService : TaskService) { }

  ngOnInit(): void {
    this.getTeamData()
  }
  getTeamData(){
    this.teamService.getTeam().subscribe((res:any)=>{
      this.allteam = res
      this.teamLength = res.length
      console.log(this.teamLength);
    })
    this.getProjectsData()
  }
  getProjectsData(){
    this.projectService.getProject().subscribe((res:any)=>{
      this.allprojects = res
      this.projectLength = res.length
    })
    this.getTaskData()
  }
  getTaskData(){
    this.taskService.getTasks().subscribe((res:any)=>{
      this.taskLength = res.length
      return res.map((a:any)=>{
        if(a.status === 'Pending'){
          this.pendingTask++
          console.log(a);
        }
        else{
          this.completedTask++
        }
      });
    })
  }
  // getData()
  // {
  //   this.projectService.getProject().subscribe((res:any)=>{
  //    this.projects = res
  //     return res.map((a:any)=>{
  //       if(a.status === 'Pending'){
  //         this.pending++
  //         console.log(a);
  //       }
  //       else{
  //         this.completed++
  //       }
  //     });
  //   })
  // }
}
