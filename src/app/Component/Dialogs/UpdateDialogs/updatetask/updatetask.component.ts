import { validateVerticalPosition } from '@angular/cdk/overlay';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TaskteammodelComponent } from 'src/app/Component/AllTeam/TaskTeam/taskteammodel/taskteammodel.component';
import { ProjectService } from 'src/app/Services/Project/project.service';
import { TaskService } from 'src/app/Services/Task/task.service';
import { TeamService } from 'src/app/Services/Team/team.service';

@Component({
  selector: 'app-updatetask',
  templateUrl: './updatetask.component.html',
  styleUrls: ['./updatetask.component.scss']
})
export class UpdatetaskComponent implements OnInit {
  TaskID : any ;
  projects: any;
  projectName : string = ''
  tasks: any[] = [];
  team: any[] = [];
  taskTeam : any[] = [];
  taskTeamLength : number = 0;
  filterTeam : any[] = []
  taskdetail : any;

  constructor( @Inject(MAT_DIALOG_DATA) public data: any , private snackbar : MatSnackBar , private fb: FormBuilder, private projectService: ProjectService, private taskService: TaskService, private teamService: TeamService, private dialog: MatDialog , private dialogref : MatDialogRef<UpdatetaskComponent> ){
    this.taskForm()
  }
  public taskform: FormGroup = new FormGroup({})
  ngOnInit(): void {
    this.taskdetail = this.data.task
    this.TaskID = this.data.task.id
    this.taskTeam = this.data.taskteam
    this.taskTeamLength = this.taskTeam.length
    console.log(this.taskdetail);
    this.setFormValue()
  }
  taskForm() {
    this.taskform = this.fb.group({
      title: new FormControl('', [Validators.required]),
      task: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required]),
      startdate: new FormControl('', [Validators.required]),
      enddate: new FormControl('', [Validators.required]),
      project: new FormControl('', [Validators.required]),
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
      this.taskTeamLength = this.taskTeam.length
      this.taskform.get('taskteam')?.setValue(this.taskTeam)
      this.getfilterTeam()
    });
  }
  openfilteredteamDialog() {
    const dialogRef = this.dialog.open(TaskteammodelComponent, {
      data: this.filterTeam
    });

    dialogRef.afterClosed().subscribe((data :any) => {
      console.log(data);
      // this.taskTeam = [...this.taskTeam, ...data]
      this.taskTeam.push(...data)
      this. getfilterTeam()
      this.taskTeamLength = this.taskTeam.length
    });
  }
  addTask() {
    if (this.taskform.valid) {
        // this.taskform.patchValue({ taskteam: this.taskTeam })
      console.log(this.taskform.value)
      this.taskService.updateTask(this.TaskID , this.taskform.value).subscribe((res:any)=>{
        console.log('Task updated successfully' , res);
        this.snackbar.open('Task updated successfully', '' ,  {
          duration: 2000,
          horizontalPosition: 'end',
          verticalPosition: 'top',
        });
        this.dialogref.close()
      },
      error=>{
        console.error('Error in updating task' , error)
      }
    )
      this.taskform.reset()
      this.taskTeam = []
    }
    else{
      this.taskform.markAllAsTouched()
    }
  }

  setFormValue(){
    this.taskform.patchValue({ title: this.taskdetail.title })
    this.taskform.patchValue({ task: this.taskdetail.task })
    this.taskform.patchValue({ startdate: this.taskdetail.startdate })
    this.taskform.patchValue({ enddate: this.taskdetail.enddate })
    this.taskform.patchValue({ status: this.taskdetail.status })
    this.taskform.patchValue({ project: this.taskdetail.project })
    this.taskform.patchValue({ taskteam: this.taskdetail.taskteam })
    this.getProjects()
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
    this.getfilterTeam()
  }
    getfilterTeam(){
      const TaskMemberId = this.taskTeam.map(a => a.id)
      console.log(this.taskTeam);
      this.filterTeam = this.team.filter(a => !TaskMemberId.includes(a.id))
      console.log('filteredTaskTeam' , this.filterTeam);
      console.log(TaskMemberId);
    }
  removeMember(MemberId : string) {
   this.taskTeam =  this.taskTeam.filter( team => team.id !== MemberId)
  }
}
