import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamService } from 'src/app/Services/Team/team.service';
import { DeletecomponentComponent } from 'src/app/Component/deletecomponent/deletecomponent.component';

@Component({
  selector: 'app-viewmember',
  templateUrl: './viewmember.component.html',
  styleUrls: ['./viewmember.component.scss']
})
export class ViewmemberComponent implements OnInit {

  MemberId : any = this.activeroute.snapshot.paramMap.get('id')
  memberdata: any;

  constructor(private teamservice : TeamService ,  private activeroute : ActivatedRoute , private router : Router , public dialog : MatDialog) { }

  ngOnInit(): void {
    this.getMember()
  }
  getMember()
  {
    this.teamservice.getMember(this.MemberId).subscribe((res:any)=>{
      this.memberdata = res
      console.log(res);
    })
  }
  removeMember() {
    this.teamservice.removeMember(this.MemberId).subscribe(() => {
      this.router.navigate(['/team/viewteam']);
    }, error => {
      console.error('Error removing member:', error);
    });
  }
  updateMember() {
    this.teamservice.updateMember(this.MemberId, this.memberdata).subscribe(() => {
      this.router.navigate([`/team/addteam/`]);
    }, error => {
      console.error('Error updating member:', error);
    });
  }
  openremoveDialog(): void {
    const dialogRef = this.dialog.open(DeletecomponentComponent, {
      data : this.MemberId
    });
    // dialogRef.afterClosed(DeletecomponentComponent);
    // .afterClosed().subscribe((data :any) => {
    //   console.log(data);
    //   this.taskTeam = data
    //   this.taskTeamLength = data.length
    //   this.taskform.get('taskteam')?.setValue(this.taskTeam)
    // });
  }
  }
