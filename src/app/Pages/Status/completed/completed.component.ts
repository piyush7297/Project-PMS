import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/Services/Project/project.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent implements OnInit {
  completeProjects : any[] = [];
  constructor(private ProjectService : ProjectService) { }

  ngOnInit(): void {
    this.getProjectStatus()
  }
  getProjectStatus(){
    this.ProjectService.getProject().subscribe((res:any)=>{
      return res.map((a:any)=>{
        if(a.status === 'Completed'){
          this.completeProjects.push(a)
        }
        else{

        }
      });

    })
  }
}
