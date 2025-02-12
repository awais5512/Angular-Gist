import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GistsLoadingComponent } from './gists-loading.component';
import { SharedComponentsModule } from '../../../components/shared-components.module';

@NgModule({
  declarations: [GistsLoadingComponent],
  imports: [CommonModule, SharedComponentsModule],
  exports: [GistsLoadingComponent],
})
export class GistLoadingModule {}
