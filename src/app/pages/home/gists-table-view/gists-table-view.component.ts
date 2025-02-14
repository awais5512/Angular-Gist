import { Component, Input } from '@angular/core';
import { Gist } from '../../../types/gists.types';
import { CommonModule } from '@angular/common';
import { GistsService } from '../../../services/gists.service';

@Component({
  selector: 'app-gists-table-view',
  imports: [CommonModule],
  templateUrl: './gists-table-view.component.html',
  styleUrl: './gists-table-view.component.css',
})
export class GistsTableViewComponent {
  @Input() gistsList: Gist[] = [];
  forking = false;
  starred = false;

  constructor(private gistsService: GistsService) {}

  gistIdentifier(index: number, gist: Gist) {
    return gist.id;
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
