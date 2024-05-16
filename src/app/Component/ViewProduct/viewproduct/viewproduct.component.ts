import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProjectService } from 'src/app/Services/Project/project.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AddproductComponent } from '../../Addproudct/addproduct/addproduct.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.scss'],
  encapsulation : ViewEncapsulation.None
})
export class ViewproductComponent implements OnInit {
  filteredProjects: any[] = [];
  status: string = '';
  category : string = '';
  projects: any[] = [];
  constructor(private projectService: ProjectService, private fb: FormBuilder , private dialog : MatDialog) {
    this.projectForm()
  }

  ngOnInit(): void {
    this.getPojects();
    this.filterStatus();
    this.filterCategory();
  }
  public projectform: FormGroup = new FormGroup({})
  projectForm() {
    this.projectform = this.fb.group({
      category: new FormControl(''),
      status: new FormControl(''),
    })
  }
  getPojects() {
    this.projectService.getProject().subscribe((res: any) => {
      this.projects = res;
      this.filteredProjects = res;
    })
  }
  searchText: string = '';

  onSearch(searchValue: string) {
    this.searchText = searchValue
  }
  filterStatus(){
    this.projectform.get('status')?.valueChanges.subscribe((value: string) => {
      this.status = value
      if (this.status === 'All') {
        this.filteredProjects = this.projects
      }
      else {
        this.filteredProjects = this.projects.filter(a => a.status.toLowerCase() === this.status.toLowerCase())
      }
    })
  }
  filterCategory(){
    this.projectform.get('category')?.valueChanges.subscribe((value: string) => {
      this.category = value
      if (this.category === 'All') {
        this.filteredProjects = this.projects
      }
      else {
        this.filteredProjects = this.projects.filter(a => a.category.toLowerCase() === this.category.toLowerCase())
      }
      console.log('Selected Category -> ' + this.category);
    })
  }
  openProjectDialog() {
    const dialogRef = this.dialog.open(AddproductComponent,{
      panelClass : 'opendialog-container'
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
