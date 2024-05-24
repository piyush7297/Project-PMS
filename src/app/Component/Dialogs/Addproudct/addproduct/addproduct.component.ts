import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup , FormControl , FormControlName, Validators} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProjectService } from 'src/app/Services/Project/project.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss'],
  encapsulation : ViewEncapsulation.None
})
export class AddproductComponent implements OnInit {
  startDate = new Date(1990, 0, 1);

  constructor(private fb : FormBuilder , private projectService : ProjectService , private snackbar : MatSnackBar , private dialogref : MatDialogRef<AddproductComponent>) {
    this.projectForm()
   }
  public projectform : FormGroup = new FormGroup({})
  ngOnInit(): void {
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


  addProject(){
    if(this.projectform.valid){
      console.log(this.projectform.value)
      this.projectService.setProject(this.projectform.value)
      this.projectform.reset()
      this.dialogref.close()
      this.snackbar.open('Project added successfully', '' ,  {
        duration: 2000,
        horizontalPosition: 'end',
        verticalPosition: 'top',
      });
    }
    else{
      console.log('Please Enter all fields ');
      this.projectform.markAllAsTouched()
    }
  }
}
