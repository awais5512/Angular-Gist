import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GistUserProfileComponent } from './gist-user-profile.component';
import { GistCardModule } from '../../components/gist-card/gist-card.module';
import { SharedLayoutsModule } from '../../components/layouts/layouts.module';
import { SkeletonLoadingModule } from '../../components/skeleton-loading/skeleton-loading.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [GistUserProfileComponent],
  imports: [
    CommonModule,
    GistCardModule,
    SharedLayoutsModule,
    SkeletonLoadingModule,
    RouterModule,
  ],
  exports: [GistUserProfileComponent],
})
export class GistUserProfileModule {}
