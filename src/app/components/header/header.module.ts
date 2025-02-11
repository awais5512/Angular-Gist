import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerModule } from '../layouts/container/container.module';
import { HeaderComponent } from './header.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, ContainerModule, RouterLink],
  exports: [HeaderComponent],
})
export class HeaderModule {}
