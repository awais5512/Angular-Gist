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
  paginatedGists: Gist[] = [];
  loadingGists = true;
  viewMode: string = 'list';
  gistStatus: string = '';

  viewOptions = [
    { label: 'list', icon: '/listIcon.svg' },
    { label: 'grid', icon: '/tableIcon.svg' },
  ];

  onViewChange(mode: string) {
    this.viewMode = mode;
  }

  onPaginatedItemsReceived(items: Gist[]): void {
    this.paginatedGists = items;
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

  onForkGist(gistID: string) {
    this.gistStatus = 'forking';
    this.gistsService.forkGist(gistID).subscribe({
      next: () => {
        alert(`Forked a gist => ${gistID}`);
        this.gistStatus = '';
      },
      error: () => {
        this.gistStatus = '';
      },
    });
  }

  onStarGist(gistID: string) {
    this.gistStatus = 'starring';
    this.gistsService.starGist(gistID).subscribe({
      next: () => {
        alert(`Starred a gist => ${gistID}`);
        this.gistStatus = '';
      },
      error: () => {
        this.gistStatus = '';
      },
    });
  }
}
