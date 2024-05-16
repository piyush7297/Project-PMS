import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AddteamComponent } from '../../Addteam/addteam/addteam.component';

@Component({
  selector: 'app-taskteammodel',
  templateUrl: './taskteammodel.component.html',
  styleUrls: ['./taskteammodel.component.scss']
})
export class TaskteammodelComponent implements OnInit {
  taskTeam : any[]= []
  taskTeamLength : number = 0
  team : any;
  constructor( @Inject(MAT_DIALOG_DATA) public data: any, private dialogRef : MatDialogRef<AddteamComponent> ) { }

  ngOnInit(): void {
    this.team = this.data
  }
  addteam(member : any){
    console.log(member);
  }
  closeDialog(data : any){
    this.dialogRef.close(data)
  }

  memberChange(event : any , member : any){
    if(event.checked === true){
      this.taskTeam.push(member)
      this.taskTeamLength = this.taskTeam.length
      // console.log('Launching Team ', member );
      // console.log(this.taskTeam);
    }
    else{
      this.taskTeam = this.taskTeam.filter(a => a.id !== member.id)
      console.log(this.taskTeam);
      // this.taskTeam = this.taskTeam.filter
      console.log('Crashing Team');
    }
  }
  addTeam(){
    this.closeDialog(this.taskTeam )
    console.log(this.taskTeam);
  }
}
