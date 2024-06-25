import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddtaskComponent } from 'src/app/Component/Dialogs/addtask/addtask.component';
import { ProjectService } from 'src/app/Services/Project/project.service';
import { TaskService } from 'src/app/Services/Task/task.service';

@Component({
  selector: 'app-viewtask',
  templateUrl: './viewtask.component.html',
  styleUrls: ['./viewtask.component.scss'],
  encapsulation : ViewEncapsulation.None
})
export class ViewtaskComponent implements OnInit {
  tasks: any[] = [];
  filteredTasks: any[] = [];
  projects : any;
  status: string = '';
  project : string = '';
  constructor(private projectService: ProjectService, private fb: FormBuilder , private taskService : TaskService , private dialog : MatDialog) {
    this.taskForm()
  }

  ngOnInit(): void {
    this.getTask();
    this.getProjects()
  }
  public taskform: FormGroup = new FormGroup({})

  taskForm() {
    this.taskform = this.fb.group({
      status: new FormControl(''),
      project: new FormControl(''),
    })
  }
  getTask(){
    this.taskService.getTasks().subscribe((res:any)=>{
      this.tasks = res
      this.filteredTasks = res
    })
    this.filterStatus()
  }
  searchText: string = '';

  onSearch(searchValue: string) {
    this.searchText = searchValue.trim().toLowerCase().replace(/\s/g, '')
    this.filterOnSearch()
  }
  filterOnSearch(){
    if(this.searchText === ''){
      this.filteredTasks = this.tasks
      return;
    }
    this.filteredTasks  = this.tasks.filter(item =>
      item.task.trim().toLowerCase().replace(/\s/g, '').includes(this.searchText)
    )
  }
  filterStatus(){
    this.taskform.get('status')?.valueChanges.subscribe((value: string) => {
      this.status = value
      if (!this.status) {
        this.filteredTasks = this.tasks
      }
      else {
        this.filteredTasks = this.tasks.filter(a => a.status.toLowerCase() === this.status.toLowerCase())
      }
    })
    this.filterProject();
  }
  filterProject(){
    this.taskform.get('project')?.valueChanges.subscribe((value: string) => {
      this.project = value
      if (this.project === '') {
        this.filteredTasks = this.tasks
      }
      else {
        this.filteredTasks = this.tasks.filter(a => a.project.toLowerCase() === this.project.toLowerCase())
      }
      console.log('Selected Project -> ' + this.project);
    })
  }
  openAddtaskDialog() {
    const dialogRef = this.dialog.open(AddtaskComponent,{
      panelClass : 'opendialog-container'
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.getTask()
    });
  }
  getProjects(){
    this.projectService.getProject().subscribe((res:any)=>{
      this.projects = res
    })
  }
}
