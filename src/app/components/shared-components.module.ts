import { NgModule } from '@angular/core';
import { HeaderModule } from './header/header.module';
import { SkeletonLoadingModule } from './skeleton-loading/skeleton-loading.module';

@NgModule({
  imports: [HeaderModule, SkeletonLoadingModule],
  exports: [HeaderModule, SkeletonLoadingModule],
})
export class SharedComponentsModule {}
