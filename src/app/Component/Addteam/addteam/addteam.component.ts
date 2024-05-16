import { Component, OnInit, ViewEncapsulation ,  } from '@angular/core';
import { FormsModule , ReactiveFormsModule , FormGroup , FormControlName , FormBuilder, FormControl, Validators } from '@angular/forms';
import { ProjectService } from 'src/app/Services/Project/project.service';
import { TeamService } from 'src/app/Services/Team/team.service';

@Component({
  selector: 'app-addteam',
  templateUrl: './addteam.component.html',
  styleUrls: ['./addteam.component.scss'],
})
export class AddteamComponent implements OnInit {
  allMember : any[] = [];
  projects : any[] = [];


  constructor(public fb : FormBuilder , public teamService : TeamService , private projectService : ProjectService) {
    this.memberForm()
  }
  ngOnInit(): void {
    this.getProject()
  }

  public teamForm : FormGroup = new FormGroup({})
  memberForm(){
    this.teamForm = this.fb.group ({
      name :  ["" , [Validators.required  , Validators.minLength(2)]],
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

  addTeam(){
    if(this.teamForm.valid){
      // project fetch
      this.teamService.setTeam(this.teamForm.value)

      this.allMember.push(this.teamForm.value)
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
