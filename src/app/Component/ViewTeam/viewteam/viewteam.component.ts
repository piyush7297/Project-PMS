import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControlName, FormControl, FormGroup } from '@angular/forms';
import { ProjectService } from 'src/app/Services/Project/project.service';
import { TeamService } from 'src/app/Services/Team/team.service';
import { AddteamComponent } from '../../Dialogs/Addteam/addteam/addteam.component';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-viewteam',
  templateUrl: './viewteam.component.html',
  styleUrls: ['./viewteam.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ViewteamComponent implements OnInit {
  filteredTeam: any = [];
  allTeam: any[] = [];
  projects: any;
  projectValue: string = '';
  professionValue: string = '';
  pageSizeOptions: number[] = [6, 12, 18, 100];
  pageSize: number = 12;
  currentPage: number = 0;
  teamlength: number = 0;
  searchText: string = 'a'
  constructor(private teamService: TeamService, private ProjectService: ProjectService, private fb: FormBuilder, public dialog: MatDialog) {
    this.teamform()
  }

  ngOnInit(): void {
    this.getData()
  }

  public teamForm: FormGroup = new FormGroup({})
  teamform() {
    this.teamForm = this.fb.group({
      Profession: new FormControl(''),
      Project: new FormControl(''),
    })
  }
  onPageChange(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.filterTeam()
  }
  filterTeam() {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.filteredTeam = this.allTeam.slice(startIndex, endIndex)
  }

  getData() {
    this.teamService.getTeam().subscribe((res: any) => {
      this.allTeam = res
      this.filteredTeam = res
      this.teamlength = this.allTeam.length
      this.filteredTeam.sort((a: any, b: any) => {
        return a.name.localeCompare(b.name);
      });
      this.filterTeam()
    })

    this.ProjectService.getProject().subscribe((res: any) => {
      this.projects = res
    })
    this.filterProject()
  }

  onSearchTextChanged(searchValue: any) {
    this.searchText = searchValue.trim().replace(/\s/gi, '');
    console.log(this.searchText);
    this.filterOnSearch()
  }
  filterOnSearch() {
    if (this.searchText === '') {
      this.filterTeam()
      this.teamlength = this.allTeam.length
      return;
    }
    {
      this.filteredTeam = this.allTeam.filter(item =>
        item.name.toLowerCase().trim().replace(/\s/gi, '').includes(this.searchText)
      )
      this.teamlength = this.filteredTeam.length

    }
  }
  filterProject() {
    this.teamForm.get('Project')?.valueChanges.subscribe((value: string) => {
      this.projectValue = value
      console.log(value);
      if (this.projectValue === 'All') {
        this.filteredTeam = this.allTeam
        this.teamlength = this.allTeam.length
      }
      else {
        this.filteredTeam = this.allTeam.filter(a => a.project.toLowerCase() === this.projectValue.toLowerCase())
        this.teamlength = this.filteredTeam.length
      }
      console.log('Selected projectValue -> ' + this.projectValue);
    })
    this.filterCategory()
  }
  filterCategory() {
    this.teamForm.get('Profession')?.valueChanges.subscribe((value: string) => {
      this.professionValue = value
      console.log(value);
      if (this.professionValue === 'All') {
        this.filteredTeam = this.allTeam
        this.teamlength = this.allTeam.length
      }
      else {
        this.filteredTeam = this.allTeam.filter(a => a.profession.toLowerCase() === this.professionValue.toLowerCase())
        this.teamlength = this.filteredTeam.length
      }
      console.log('Selected Profession -> ' + this.professionValue);
    })
    console.log(this.filteredTeam);
  }
  openDialog() {
    const dialogRef = this.dialog.open(AddteamComponent, {
      panelClass: 'opendialog-container'
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.getData()
    });
  }

}
