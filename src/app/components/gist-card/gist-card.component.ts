import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Gist } from '../../types/gists.types';

@Component({
  selector: 'app-gist-card',
  standalone: false,
  templateUrl: './gist-card.component.html',
  styleUrl: './gist-card.component.css',
})
export class GistCardComponent {
  @Input() gist!: Gist;
  @Output() fork = new EventEmitter<string>();
  @Output() star = new EventEmitter<string>();

  getFirstFileName(files: any): string {
    return files ? Object.keys(files)[0] : 'Unknown File';
  }

  onFork(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.fork.emit(this.gist.id);
  }

  onStar(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.star.emit(this.gist.id);
  }
}
