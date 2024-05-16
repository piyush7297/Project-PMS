import { ProjectService } from 'src/app/Services/Project/project.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutprojects',
  templateUrl: './aboutprojects.component.html',
  styleUrls: ['./aboutprojects.component.scss']
})
export class AboutprojectsComponent implements OnInit {
  projects : any ;
  pending : number = 0;
  completed : number = 0;
  constructor(private projectService : ProjectService) { }

  ngOnInit(): void {
    this.getData()
  }
  getData()
  {
    this.projectService.getProject().subscribe((res:any)=>{
     this.projects = res
      return res.map((a:any)=>{
        if(a.status === 'Pending'){
          this.pending++
          console.log(a);
        }
        else{
          this.completed++
        }
      });
    })
  }
}
