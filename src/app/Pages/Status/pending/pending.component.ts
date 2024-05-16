import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/Services/Project/project.service';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.scss']
})
export class PendingComponent implements OnInit {
  pendingProjects : any[] = [] ;
  constructor(private ProjectService : ProjectService) { }

  ngOnInit(): void {
    this.getProjectStatus()
  }
  getProjectStatus(){
    this.ProjectService.getProject().subscribe((res:any)=>{
      return res.map((a:any)=>{
        if(a.status === 'Pending'){
          console.log(a);
          this.pendingProjects.push(a)
        }
        else{

        }
      });

    })
  }
}
