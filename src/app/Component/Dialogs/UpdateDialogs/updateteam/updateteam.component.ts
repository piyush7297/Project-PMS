import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProjectService } from 'src/app/Services/Project/project.service';
import { TeamService } from 'src/app/Services/Team/team.service';

@Component({
  selector: 'app-updateteam',
  templateUrl: './updateteam.component.html',
  styleUrls: ['./updateteam.component.scss']
})
export class UpdateteamComponent implements OnInit {
  memberData : any;
  memberId :any
  projects : any[] = [];

  constructor( @Inject(MAT_DIALOG_DATA) public data: any, private snackbar : MatSnackBar ,  private dialogRef : MatDialogRef<UpdateteamComponent> , public fb : FormBuilder , public teamService : TeamService , private projectService : ProjectService) {
    this.memberForm()
  }
  ngOnInit(): void {
    this.memberData = this.data
    this.memberId = this.data.id
    this.setForm()
    this.getProject()
  }

  public teamForm : FormGroup = new FormGroup({})
  memberForm(){
    this.teamForm = this.fb.group ({
      name :  ['' , [Validators.required  , Validators.minLength(2)]],
      email : ["" , [Validators.required , Validators.email]],
      phone : ["" , [Validators.required , Validators.pattern(/^\d{10}$/) , Validators.maxLength(10) ]],
      role : ["" , [Validators.required]],
      address :["" , []],
      gender :["" , [Validators.required]],
      profession :["" , [Validators.required]],
      salary : ["" , []],
      project : ["" , [Validators.required]]
    })
  }

  get name(){
    return this.teamForm.get('name');
  }
  get email(){
    return this.teamForm.get('email');
  }
  get phone(){
    return this.teamForm.get('phone');
  }
  get profession(){
  return this.teamForm.get('profession');
  }
  get gender(){
    return this.teamForm.get('gender');
  }
  get role(){
    return this.teamForm.get('role');
  }

  setForm(){
    this.teamForm.patchValue({'name' : this.memberData.name})
    this.teamForm.patchValue({ 'email': this.memberData.email })
    this.teamForm.patchValue({ 'phone': this.memberData.phone })
    this.teamForm.patchValue({ 'address': this.memberData.address })
    this.teamForm.patchValue({ 'gender': this.memberData.gender })
    this.teamForm.patchValue({ 'profession': this.memberData.profession })
    this.teamForm.patchValue({ 'role': this.memberData.role })
    this.teamForm.patchValue({ 'project': this.memberData.project })
    this.teamForm.patchValue({ 'salary': this.memberData.salary })
  }

  addTeam(){
    if(this.teamForm.valid){
      this.teamService.updateTeam(this.memberId , this.teamForm.value).subscribe((res:any)=>{
        console.log('Updated memberdata successfully' , res);
        this.snackbar.open('Member updated successfully', '' ,  {
          duration: 2000,
          horizontalPosition: 'end',
          verticalPosition: 'top',
        });
        this.dialogRef.close()
      },
      error=>{
        console.error('Error in updating member' , error)
      })
      this.teamForm.reset()
    }
    else{
      this.teamForm.markAllAsTouched()
      console.log('All fields are required');
    }
  }
  getProject(){
    this.projectService.getProject().subscribe((res:any)=>{
      this.projects = res;
    })
  }
}
