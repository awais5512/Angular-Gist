import { Component, OnInit } from '@angular/core';
import { GistsService } from '../../services/gists.service';
import { Gist } from '../../types/gists.types';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  constructor(private gistsService: GistsService) {}

  title = 'Gist Angular | Home';
  gistsList: Gist[] = [];
  loadingGists = true;
  viewMode: string = 'list';

  viewOptions = [
    { label: 'list', icon: '/tableIcon.svg' },
    { label: 'grid', icon: '/listIcon.svg' },
  ];

  onViewChange(mode: string) {
    console.log('got view', mode);
    this.viewMode = mode;
    console.log(this.viewMode);
  }

  ngOnInit() {
    this.gistsService.getPublicGists().subscribe({
      next: (gists) => {
        this.gistsList = gists;
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        this.loadingGists = false;
      },
    });
  }
}
