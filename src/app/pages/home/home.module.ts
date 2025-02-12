import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedLayoutsModule } from '../../components/layouts/layouts.module';
import { SharedComponentsModule } from '../../components/shared-components.module';
import { GistsTableViewComponent } from './gists-table-view/gists-table-view.component';
import { ToggleViewModule } from '../../components/toggle-view/toggle-view.module';
import { GistsCardViewComponent } from './gists-card-view/gists-card-view.component';
import { GistLoadingModule } from './gists-loading/gists-loading.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SharedLayoutsModule,
    SharedComponentsModule,
    GistsTableViewComponent,
    ToggleViewModule,
    GistLoadingModule,
    GistsCardViewComponent,
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
