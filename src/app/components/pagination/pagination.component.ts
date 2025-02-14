import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: false,
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css',
})
export class PaginationComponent<T> implements OnChanges {
  @Input() items: T[] = [];
  @Input() itemsPerPage: number = 5;
  @Input() currentPage: number = 1;
  @Output() paginatedItems = new EventEmitter<T[]>();
  @Output() pageChanged = new EventEmitter<number>();

  get totalPages(): number {
    return Math.ceil(this.items.length / this.itemsPerPage);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.emitPaginatedItems();
  }

  emitPaginatedItems(): void {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.paginatedItems.emit(this.items.slice(start, end));
  }

  changePage(newPage: number): void {
    if (newPage >= 1 && newPage <= this.totalPages) {
      this.currentPage = newPage;
      this.pageChanged.emit(newPage);
      this.emitPaginatedItems();
    }
  }

  trackByFn(index: number): number {
    return index;
  }
}
