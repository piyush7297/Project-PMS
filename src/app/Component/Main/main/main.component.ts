import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/Services/Project/project.service';
import { TeamService } from 'src/app/Services/Team/team.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

 constructor() { }

  ngOnInit(): void {
  }

}
