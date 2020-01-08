import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule, MatTableModule, MatTooltipModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatExpansionModule, MatListModule, MatSidenavModule, MatCheckboxModule, MatStepperModule, MatSnackBarModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';


const material = [
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatTableModule,
  MatTooltipModule,
  MatSelectModule,
  MatListModule,
  MatSidenavModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatExpansionModule,
  MatCheckboxModule,
  MatStepperModule,
  MatSnackBarModule
]



@NgModule({
  declarations: [],
  imports: [
    material
  ],
  exports: [material]
})
export class MaterialModule { }
