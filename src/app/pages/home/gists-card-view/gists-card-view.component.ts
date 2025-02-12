import { Component, Input } from '@angular/core';
import { Gist, GistFile } from '../../../types/gists.types';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-gists-card-view',
  imports: [CommonModule, RouterModule],
  templateUrl: './gists-card-view.component.html',
  styleUrl: './gists-card-view.component.css',
})
export class GistsCardViewComponent {
  @Input() gistsList: Gist[] = [];

  gistIdentifier(index: number, gist: Gist) {
    return gist.id;
  }

  getFirstFileName(files: Record<string, GistFile>) {
    return Object.keys(files)[0] || '';
  }
}
