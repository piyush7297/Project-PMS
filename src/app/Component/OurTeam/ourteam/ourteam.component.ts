import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/Services/Project/project.service';
import { TeamService } from 'src/app/Services/Team/team.service';

@Component({
  selector: 'app-ourteam',
  templateUrl: './ourteam.component.html',
  styleUrls: ['./ourteam.component.scss']
})
export class OurteamComponent implements OnInit {
  team : any[] = [];
  project : any[] = [];
  constructor(private  teamService : TeamService , private projectService : ProjectService) { }

  ngOnInit(): void {
    this.getServiceData()
  }
  getServiceData()
  {
    this.teamService.getTeam().subscribe((res:any)=>{
      this.team = res
    })
    this.projectService.getProject().subscribe((res:any)=>{
      this.project = res
    })
  }

}
