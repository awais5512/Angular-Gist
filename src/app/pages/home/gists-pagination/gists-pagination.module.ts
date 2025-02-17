import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GistsPaginationComponent } from './gists-pagination.component';
import { PaginationModule } from '../../../components/pagination/pagination.module';

@NgModule({
  declarations: [GistsPaginationComponent],
  imports: [CommonModule, PaginationModule],
  exports: [GistsPaginationComponent],
})
export class GistsPaginationModule {}
