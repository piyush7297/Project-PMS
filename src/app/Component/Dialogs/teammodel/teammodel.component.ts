import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-teammodel',
  templateUrl: './teammodel.component.html',
  styleUrls: ['./teammodel.component.scss']
})
export class TeammodelComponent implements OnInit {
  team : any[] = [];
  teamOf : string = ''
  constructor( @Inject(MAT_DIALOG_DATA) public data: any,) { }

  ngOnInit(): void {
    this.team = this.data.team  
    this.teamOf = this.data.teamOf
  }

  removeMember(MermberId : string){
    this.team = this.team.filter(a => a.id != MermberId)
  }
}
