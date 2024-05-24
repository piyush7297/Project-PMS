import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ViewmemberComponent } from 'src/app/Pages/ViewMember/viewmember/viewmember.component';
import { TeamService } from 'src/app/Services/Team/team.service';

@Component({
  selector: 'app-deletecomponent',
  templateUrl: './deletecomponent.component.html',
  styleUrls: ['./deletecomponent.component.scss']
})
export class DeletecomponentComponent implements OnInit {
  @Input () delete_item : string = ''
  constructor( @Inject(MAT_DIALOG_DATA) public data: any ,  public dialogRef: MatDialogRef<ViewmemberComponent> , private teamservice : TeamService , public router : Router ) { }
  MemberId : string = '';
  Content : string = '';
  ngOnInit(): void {
    this.MemberId = this.data.MemberId
    this.Content = this.data.Content
    // this.dialogRef.close(true)
  }
  removeMember(MemberId : string) {
    this.teamservice.removeMember(MemberId).subscribe(() => {
      this.router.navigate(['/team']);
    }, error => {
      console.error('Error removing member:', error);
    });
  }
}
