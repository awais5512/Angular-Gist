import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { GistCardComponent } from './gist-card.component';

@NgModule({
  declarations: [GistCardComponent],
  imports: [CommonModule, RouterLink],
  exports: [GistCardComponent],
})
export class GistCardModule {}
