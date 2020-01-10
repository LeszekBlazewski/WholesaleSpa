import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';



@NgModule({
  declarations: [NavbarComponent, DeleteModalComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [NavbarComponent, DeleteModalComponent]
})
export class SharedModule { }
