import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from 'src/app/Services/Project/project.service';
import { TeamService } from 'src/app/Services/Team/team.service';
import { TeammodelComponent } from 'src/app/Component/Dialogs/teammodel/teammodel.component';
import { DeletecomponentComponent } from 'src/app/Component/Dialogs/deletedialog/deletecomponent.component';
import { UpdateprojectComponent } from 'src/app/Component/Dialogs/UpdateDialogs/updateproject/updateproject.component';
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
  constructor(private activateRoute : ActivatedRoute ,private router : Router ,  private projectService : ProjectService , private teamService : TeamService , private dialog : MatDialog) { }

  ngOnInit(): void {
    this.getProjectDetail()
  }
  openviewteamDialog() {
    const dialogRef = this.dialog.open(TeammodelComponent , {
      data : {
        team : this.projectTeam,
        teamOf : "Project"
      }
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
    const dialogRef = this.dialog.open(DeletecomponentComponent , {
      data : {
        Content : "Project"
      }
    }).afterClosed().subscribe((result : any)=>{
      if(result.result){
        this.projectService.removeProject(this.ProjectId).subscribe()
        this.router.navigate(['/project'])
      }
      else{
        console.log('False');
      }
    })
  }
  openUpdatedialog(projectdata : any) {
    const dialogRef = this.dialog.open(UpdateprojectComponent,{
      data : projectdata,
      panelClass : 'opendialog-container'
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.getProjectDetail()
    });
  }
}
