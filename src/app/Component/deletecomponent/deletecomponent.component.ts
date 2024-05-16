import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-deletecomponent',
  templateUrl: './deletecomponent.component.html',
  styleUrls: ['./deletecomponent.component.scss']
})
export class DeletecomponentComponent implements OnInit {
  @Input () delete_item : string = ''
  constructor(public dialogRef: MatDialogRef<DeletecomponentComponent>) { }

  ngOnInit(): void {

    // this.dialogRef.close(true)
  }

}
