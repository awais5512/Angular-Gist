import { NgModule } from '@angular/core';
import { HeaderModule } from './header/header.module';
import { SkeletonLoadingModule } from './skeleton-loading/skeleton-loading.module';
import { GistCardModule } from './gist-card/gist-card.module';

@NgModule({
  imports: [HeaderModule, SkeletonLoadingModule, GistCardModule],
  exports: [HeaderModule, SkeletonLoadingModule, GistCardModule],
})
export class SharedComponentsModule {}
