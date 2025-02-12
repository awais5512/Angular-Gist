import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GistDetailsComponent } from './gist-details.component';
import { ContainerModule } from '../../components/layouts/container/container.module';
import { PageWrapperModule } from '../../components/layouts/page-wrapper/page-wrapper.module';

@NgModule({
  declarations: [GistDetailsComponent],
  imports: [CommonModule, ContainerModule, PageWrapperModule],
  exports: [GistDetailsComponent],
})
export class GistDetailsModule {}
