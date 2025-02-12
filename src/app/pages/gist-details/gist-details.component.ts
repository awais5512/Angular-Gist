import { Component } from '@angular/core';
import { Gist } from '../../types/gists.types';
import { GistsService } from '../../services/gists.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gist-details',
  standalone: false,
  templateUrl: './gist-details.component.html',
  styleUrl: './gist-details.component.css',
})
export class GistDetailsComponent {
  gistId!: string;
  gist!: Gist;
  loading = true;
  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private gistService: GistsService
  ) {}

  ngOnInit() {
    this.gistId = this.route.snapshot.paramMap.get('id')!;
    this.fetchGistDetails();
  }

  fetchGistDetails() {
    this.gistService.getGistByID(this.gistId).subscribe({
      next: (gist) => {
        // console.log(gist);
        this.gist = gist;
      },
      error: (error) => {
        this.errorMessage = error;
      },
      complete: () => {
        this.loading = false;
      },
    });
  }
}
