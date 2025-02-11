import { NgModule } from '@angular/core';
import { SkeletonLoadingComponent } from './skeleton-loading.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [SkeletonLoadingComponent],
  imports: [CommonModule],
  exports: [SkeletonLoadingComponent],
})
export class SkeletonLoadingModule {}
