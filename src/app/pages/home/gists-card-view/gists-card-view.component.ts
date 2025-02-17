import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Gist, GistFile } from '../../../types/gists.types';
import { GistsService } from '../../../services/gists.service';
import { GistCardModule } from '../../../components/gist-card/gist-card.module';
import { PaginationModule } from '../../../components/pagination/pagination.module';

@Component({
  selector: 'app-gists-card-view',
  imports: [CommonModule, RouterModule, GistCardModule, PaginationModule],
  templateUrl: './gists-card-view.component.html',
  styleUrl: './gists-card-view.component.css',
})
export class GistsCardViewComponent {
  @Input() gistsList: Gist[] = [];
  @Output() forkGist = new EventEmitter<string>();
  @Output() starGist = new EventEmitter<string>();

  gistIdentifier(index: number, gist: Gist) {
    return gist.id;
  }

  getFirstFileName(files: Record<string, GistFile>) {
    return Object.keys(files)[0] || '';
  }
}
