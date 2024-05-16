import { Component, OnInit } from '@angular/core';
import { MatDialog, } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from 'src/app/Services/Team/team.service';
import { TeammodelComponent } from 'src/app/Component/AllTeam/teammodel/teammodel.component';
import { DeletecomponentComponent } from 'src/app/Component/deletecomponent/deletecomponent.component';
import { TaskService } from 'src/app/Services/Task/task.service';
import { TaskteammodelComponent } from 'src/app/Component/TaskTeam/taskteammodel/taskteammodel.component';

@Component({
  selector: 'app-taskdetail',
  templateUrl: './taskdetail.component.html',
  styleUrls: ['./taskdetail.component.scss']
})
export class TaskdetailComponent implements OnInit {

  constructor(private activateRoute : ActivatedRoute , private taskService : TaskService , private teamService : TeamService , private dialog : MatDialog) { }

  TaskId : any = this.activateRoute.snapshot.paramMap.get('id');
  task : any = {};
  taskName : string = '';
  team:any[]=[]
  taskTeam : any[] = [];
  totalTeam : number = 0;

  ngOnInit(): void {
    this.gettaskDetail()
  }
  openviewteamDialog() {
    const dialogRef = this.dialog.open(TeammodelComponent , {
      data : this.taskTeam
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openfilterteamDialog() {
    const dialogRef = this.dialog.open(TaskteammodelComponent , {
      data : this.team
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  gettaskDetail(){
    this.taskService.getSingleTask(this.TaskId).subscribe((res:any)=>{
      this.task = res;
      this.taskName = res.title
      console.log(this.task);
    })
      this.getTeam()
  }
  getTeam(){
    this.teamService.getTeam().subscribe((res:any)=>{
      this.team = res
      // this.filterTeam()
    })
    this.getTaskTeam()
  }

  getTaskTeam(){
    this.taskService.getSingleTask(this.TaskId).subscribe((res:any)=>{
      this.taskTeam = res.taskteam
      console.log(this.taskTeam);
    })
  }
  // }
  // this.filteredtasks = this.tasks.filter(a => a.status.toLowerCase() === this.status.toLowerCase())

  // filterTeam(){
  //   this.taskTeam = this.team.filter( a => a.task.toLowerCase() === this.taskName.toLowerCase() )
  //   console.log(this.team);
  //   console.log(this.taskTeam);
  //   this.totalTeam = this.taskTeam.length
  // }
  openremoveDialog(): void {
    this.dialog.open(DeletecomponentComponent);
  }
}
