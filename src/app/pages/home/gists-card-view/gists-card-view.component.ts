import { Component, Input } from '@angular/core';
import { Gist, GistFile } from '../../../types/gists.types';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
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
  paginatedGists: Gist[] = [];
  currentPage = 1;
  itemsPerPage = 5;

  constructor(private gistsService: GistsService) {}

  onPageChange(newPage: number): void {
    this.currentPage = newPage;
  }

  onPaginatedItems(items: Gist[]): void {
    this.paginatedGists = items;
  }

  gistIdentifier(index: number, gist: Gist) {
    return gist.id;
  }

  getFirstFileName(files: Record<string, GistFile>) {
    return Object.keys(files)[0] || '';
  }

  onForkGist(gistID: string) {
    this.gistsService.forkGist(gistID).subscribe({
      next: () => {
        alert(`Forked a gist => ${gistID}`);
      },
      error: (err) => console.error('Forking failed', err),
    });
  }

  onStarGist(gistID: string) {
    this.gistsService.starGist(gistID).subscribe({
      next: () => {
        alert(`Starred a gist => ${gistID}`);
      },
      error: (err) => console.error('Starring failed', err),
    });
  }
}
