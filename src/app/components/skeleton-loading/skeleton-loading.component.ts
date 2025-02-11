import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skeleton-loading',
  standalone: false,
  templateUrl: './skeleton-loading.component.html',
  styleUrl: './skeleton-loading.component.css',
})
export class SkeletonLoadingComponent {
  @Input() width: string = '100%';
  @Input() height: string = '20px';
}
