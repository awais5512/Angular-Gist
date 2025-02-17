import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Gist } from '../../../types/gists.types';
import { GistsService } from '../../../services/gists.service';
import { PaginationModule } from '../../../components/pagination/pagination.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-gists-table-view',
  imports: [CommonModule, PaginationModule, RouterModule],
  templateUrl: './gists-table-view.component.html',
  styleUrl: './gists-table-view.component.css',
})
export class GistsTableViewComponent {
  @Input() gistsList: Gist[] = [];
  @Output() forkGist = new EventEmitter<string>();
  @Output() starGist = new EventEmitter<string>();

  gistIdentifier(index: number, gist: Gist) {
    return gist.id;
  }
}
