import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator'
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormField, MatFormFieldControl, MatFormFieldModule} from '@angular/material/form-field';
import { MatDialogModule} from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';
import { DatePipe } from '@angular/common';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';

const MaterialComponents : any[] = [
  MatButtonModule,
  MatIconModule,
  MatDialogModule,
  MatPaginatorModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatMenuModule,
  MatNativeDateModule,
  MatInputModule,
  MatSelectModule,
  MatCheckboxModule
]
@NgModule({
  imports: [
    MaterialComponents,
    MatDialogModule,
  ],
  exports : [
    MaterialComponents
  ],
  providers : [
    DatePipe
    ]
})
export class MaterialModule { }
