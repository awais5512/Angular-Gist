import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Gist } from '../../../types/gists.types';
import { PaginationModule } from '../../../components/pagination/pagination.module';

@Component({
  selector: 'app-gists-pagination',
  standalone: false,
  templateUrl: './gists-pagination.component.html',
  styleUrl: './gists-pagination.component.css',
})
export class GistsPaginationComponent {
  @Input() gistsList: Gist[] = [];
  @Output() paginatedGistsChange = new EventEmitter<Gist[]>();

  currentPage = 1;
  itemsPerPage = 5;

  onPageChange(newPage: number): void {
    this.currentPage = newPage;
  }

  onPaginatedItems(items: Gist[]): void {
    this.paginatedGistsChange.emit(items);
  }
}
