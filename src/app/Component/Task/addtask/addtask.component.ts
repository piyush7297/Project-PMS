import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ProjectService } from 'src/app/Services/Project/project.service';
import { FormGroup, FormControl, FormControlName } from '@angular/forms';
import { TaskService } from 'src/app/Services/Task/task.service';
import { TeamService } from 'src/app/Services/Team/team.service';
import { TaskteammodelComponent } from '../../TaskTeam/taskteammodel/taskteammodel.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.scss']
})
export class AddtaskComponent implements OnInit {
  projects: any;
  projectName : string = ''
  tasks: any[] = [];
  team: any;
  taskTeam : any[] = [];
  taskTeamLength : number = 0;
  constructor(private fb: FormBuilder, private projectService: ProjectService, private taskService: TaskService, private teamService: TeamService, private dialog: MatDialog) {
    this.taskForm()
  }
  public taskform: FormGroup = new FormGroup({})

  ngOnInit(): void {
    this.taskForm()
    this.getProjects()
  }
  taskForm() {
    console.log(this.taskTeam)
    this.taskform = this.fb.group({
      title: new FormControl(this.projectName, [Validators.required]),
      task: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required]),
      startdate: new FormControl('', [Validators.required]),
      enddate: new FormControl('', [Validators.required]),
      project: new FormControl('', [Validators.required]),
      // taskTeamMembers : this.fb.array([])
      // taskteam : new FormControl(this.taskTeam)
      taskteam : [[]]
    })
  }
  get title(){
    return this.taskform.get('title')
  }
  get task(){
    return this.taskform.get('task')
  }
  get status(){
    return this.taskform.get('status')
  }
  get startdate(){
    return this.taskform.get('startdate')
  }
  get enddate(){
    return this.taskform.get('enddate')
  }
  get project(){
    return this.taskform.get('project')
  }
  openviewteamDialog() {
    const dialogRef = this.dialog.open(TaskteammodelComponent, {
      data: this.team
    });

    dialogRef.afterClosed().subscribe((data :any) => {
      console.log(data);
      this.taskTeam = data
      this.taskTeamLength = data.length
      this.taskform.get('taskteam')?.setValue(this.taskTeam)
    });
  }
  addTask() {
    if (this.taskform.valid) {
        this.taskform.patchValue({ taskteam: this.taskTeam })
      console.log(this.taskform.value)
      this.taskService.setTasks(this.taskform.value)
      this.taskform.reset()
      this.taskTeam = []
      // const taskTeamArray = this.taskform.get('taskTeamMembers') as FormArray
      // taskTeamArray.push(this.taskTeam)
      // console.log(taskTeamArray);
      // console.log(this.taskTeam);
    }
    else{
      this.taskform.markAllAsTouched()
    }
  }
  getProjects() {
    this.projectService.getProject().subscribe((res: any) => {
      this.projects = res
      console.log(this.projects);
      this.projectName = res.map((a:any)=>{
        a.name
      })
    })
    this.getTeam()
  }
  getTeam() {
    this.teamService.getTeam().subscribe((res: any) => {
      this.team = res
    })
  }
}