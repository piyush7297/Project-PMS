import { Component, OnInit } from '@angular/core';
import { MatDialog, } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from 'src/app/Services/Team/team.service';
import { TeammodelComponent } from 'src/app/Component/Dialogs/teammodel/teammodel.component';
import { DeletecomponentComponent } from 'src/app/Component/Dialogs/deletedialog/deletecomponent.component';
import { TaskService } from 'src/app/Services/Task/task.service';
import { TaskteammodelComponent } from 'src/app/Component/AllTeam/TaskTeam/taskteammodel/taskteammodel.component';
import { UpdatetaskComponent } from 'src/app/Component/Dialogs/UpdateDialogs/updatetask/updatetask.component';

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
  filterTeam :any[] = []
  ngOnInit(): void {
    this.gettaskDetail()
  }
  openviewteamDialog() {
    const dialogRef = this.dialog.open(TeammodelComponent , {
      data : {
        team : this.taskTeam,
        teamOf : "Task"
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openfilterteamDialog() {
    const dialogRef = this.dialog.open(TaskteammodelComponent , {
      data : this.filterTeam
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.taskTeam.push(...result)
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
      this.getTaskTeam()
    })
  }
  getTaskTeam(){
    this.taskService.getSingleTask(this.TaskId).subscribe((res:any)=>{
      this.taskTeam = res.taskteam
      console.log(this.taskTeam);
      this.getfilterTeam()
    })
  }
  getfilterTeam(){
    const TaskMemberId = this.taskTeam.map(a => a.id)
    this.filterTeam = this.team.filter(a => !TaskMemberId.includes(a.id))
    console.log('filteredTaskTeam' , this.filterTeam);
    console.log(TaskMemberId);
  }
  openremoveDialog(): void {
    const dialogRef = this.dialog.open(DeletecomponentComponent, {
      data : {
        TaskId : this.TaskId,
        Content : "Task"
      }
    });
  }
  openUpdatedialog(Id : any) {
    const dialogRef = this.dialog.open(UpdatetaskComponent,{
      data : {
        task :this.task ,
        taskteam : this.taskTeam
      },
      panelClass : 'opendialog-container'
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.gettaskDetail()
    });
  }
}
