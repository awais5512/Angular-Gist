import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedLayoutsModule } from '../../components/layouts/layouts.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, SharedLayoutsModule],
  exports: [HomeComponent],
})
export class HomeModule {}
