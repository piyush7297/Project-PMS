import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/Services/Project/project.service';
import { TeamService } from 'src/app/Services/Team/team.service';
import { TeammodelComponent } from 'src/app/Component/AllTeam/teammodel/teammodel.component';
import { DeletecomponentComponent } from 'src/app/Component/deletecomponent/deletecomponent.component';
@Component({
  selector: 'app-viewproject',
  templateUrl: './viewproject.component.html',
  styleUrls: ['./viewproject.component.scss']
})
export class ViewprojectComponent implements OnInit {
  ProjectId : any = this.activateRoute.snapshot.paramMap.get('id');
  project : any = {};
  projectName : string = '';
  team:any[]=[]
  projectTeam : any[] = [];
  totalTeam : number = 0;
  constructor(private activateRoute : ActivatedRoute , private projectService : ProjectService , private teamService : TeamService , private dialog : MatDialog) { }

  ngOnInit(): void {
    this.getProjectDetail()
  }
  openviewteamDialog() {
    const dialogRef = this.dialog.open(TeammodelComponent , {
      data : this.projectTeam
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  getProjectDetail(){
    this.projectService.getSingleProject(this.ProjectId).subscribe((res  :any )=>{
      this.project = res;
      this.projectName = res.name
      this.getTeam()
    })
  }
  getTeam(){
    this.teamService.getTeam().subscribe((res:any)=>{
      this.team = res
      this.filterTeam()
    })
  }
  // this.filteredProjects = this.projects.filter(a => a.status.toLowerCase() === this.status.toLowerCase())

  filterTeam(){
    this.projectTeam = this.team.filter( a => a.project.toLowerCase() === this.projectName.toLowerCase() )
    console.log(this.team);
    console.log(this.projectTeam);
    this.totalTeam = this.projectTeam.length
  }
  openremoveDialog(): void {
    this.dialog.open(DeletecomponentComponent);
  }
}
