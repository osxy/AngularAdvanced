import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnelstartComponent } from './snelstart/snelstart.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const productRoutes: Routes = [
	{path: '', component: SnelstartComponent}
];

@NgModule({
  declarations: [SnelstartComponent],
  imports: [
    CommonModule,
    SharedModule,
		RouterModule.forChild(productRoutes)
  ]
})
export class SnelstartModule { }
console.log('SnelStartModule loaded lazily...');