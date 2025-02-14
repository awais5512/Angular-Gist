import { NgModule } from '@angular/core';
import { HeaderModule } from './header/header.module';
import { SkeletonLoadingModule } from './skeleton-loading/skeleton-loading.module';
import { GistCardModule } from './gist-card/gist-card.module';
import { PaginationModule } from './pagination/pagination.module';

@NgModule({
  imports: [
    HeaderModule,
    SkeletonLoadingModule,
    GistCardModule,
    PaginationModule,
  ],
  exports: [
    HeaderModule,
    SkeletonLoadingModule,
    GistCardModule,
    PaginationModule,
  ],
})
export class SharedComponentsModule {}
