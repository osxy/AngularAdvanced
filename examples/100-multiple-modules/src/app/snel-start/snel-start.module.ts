import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnelStartComponent } from './snel-start/snel-start.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [SnelStartComponent],
  imports: [
    CommonModule,
		SharedModule
  ],
  exports: [
    SnelStartComponent
  ]
})
export class SnelStartModule { }
