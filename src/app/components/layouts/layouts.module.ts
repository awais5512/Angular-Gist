import { NgModule } from '@angular/core';
import { ContainerModule } from './container/container.module';
import { PageWrapperModule } from './page-wrapper/page-wrapper.module';

@NgModule({
  imports: [ContainerModule, PageWrapperModule],
  exports: [ContainerModule, PageWrapperModule],
})
export class SharedLayoutsModule {}
