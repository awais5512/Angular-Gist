import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

interface ToggleOption {
  label: string;
  icon: string;
}

@Component({
  selector: 'app-toggle-view',
  standalone: false,
  templateUrl: './toggle-view.component.html',
  styleUrls: ['./toggle-view.component.css'],
})
export class ToggleViewComponent {
  @Input() options: ToggleOption[] = [];
  @Output() viewChange = new EventEmitter<string>();

  viewMode: string = '';

  ngOnInit() {
    if (this.options.length) {
      this.viewMode = this.options[0].label;
    }
  }

  setView(mode: string) {
    this.viewMode = mode;
    this.viewChange.emit(this.viewMode);
  }
}
