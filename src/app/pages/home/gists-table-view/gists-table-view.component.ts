import { Component, Input } from '@angular/core';
import { Gist } from '../../../types/gists.types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gists-table-view',
  imports: [CommonModule],
  templateUrl: './gists-table-view.component.html',
  styleUrl: './gists-table-view.component.css',
})
export class GistsTableViewComponent {
  @Input() gistsList: Gist[] = [];

  gistIdentifier(index: number, gist: Gist) {
    return gist.id;
  }
}
