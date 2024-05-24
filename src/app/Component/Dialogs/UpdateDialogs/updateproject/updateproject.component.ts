import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProjectService } from 'src/app/Services/Project/project.service';

@Component({
  selector: 'app-updateproject',
  templateUrl: './updateproject.component.html',
  styleUrls: ['./updateproject.component.scss']
})
export class UpdateprojectComponent implements OnInit {

  projectData : any
  projectId : any

  constructor( @Inject(MAT_DIALOG_DATA) public data : any ,private snackbar: MatSnackBar ,  private dialogRef : MatDialogRef<UpdateprojectComponent> ,  private fb : FormBuilder , private projectService : ProjectService) {
    this.projectForm()
   }
  public projectform : FormGroup = new FormGroup({})
  ngOnInit(): void {
    this.projectData = this.data
    this.projectId = this.data.id
    this.setProjectForm()
  }
  projectForm(){
    this.projectform = this.fb.group ({
      name :  [('') , [Validators.required]],
      category :  [('') , [Validators.required]],
      status :  [('') , [Validators.required]],
      started :  [('') , [Validators.required]],

    })
  }
  get name(){
    return this.projectform.get('name');
  }
  get category(){
      return this.projectform.get('category')
  }
  get status(){
    return this.projectform.get('status')
  }
  get started(){
    return this.projectform.get('started')
  }

  setProjectForm(){
    this.projectform.patchValue({'name' : this.projectData.name})
    this.projectform.patchValue({'status' : this.projectData.status})
    this.projectform.patchValue({'started' : this.projectData.started})
    this.projectform.patchValue({'category' : this.projectData.category})
  }

  addProject(){
    if(this.projectform.valid){
      this.projectService.updateProject(this.projectId , this.projectform.value).subscribe((res:any)=>{
        console.log('Project updated successfully' , res);
        this.snackbar.open('Project updated successfully', '' ,  {
          duration: 2000,
          horizontalPosition: 'end',
          verticalPosition: 'top',
        });
      },
      error=>{
        console.error('Error in updating project' , error)
      }
    )
      this.projectform.reset()
      this.dialogRef.close()
    }
    else{
      console.log('Please Enter all fields ');
      this.projectform.markAllAsTouched()
    }
  }
}

