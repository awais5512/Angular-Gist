import { Component } from '@angular/core';
import { GistsService } from '../../services/gists.service';
import { Gist } from '../../types/gists.types';
import { FirebaseService } from '../../services/firebase.service';
import { User } from 'firebase/auth';

@Component({
  selector: 'app-gist-user-profile',
  standalone: false,
  templateUrl: './gist-user-profile.component.html',
  styleUrl: './gist-user-profile.component.css',
})
export class GistUserProfileComponent {
  gists: Gist[] = [];
  user: User | null = null;
  isLoading: boolean = true;
  error: string = '';

  constructor(
    private firebaseService: FirebaseService,
    private gistsService: GistsService
  ) {}

  ngOnInit(): void {
    this.firebaseService.user$.subscribe((user) => {
      this.user = user;
      if (user) {
        this.fetchUserGists();
      }
    });
  }

  getScreenName(user: User | null) {
    return (user as any)?.reloadUserInfo?.screenName || null;
  }

  gistIdentifier(index: number, gist: Gist) {
    return gist.id;
  }

  fetchUserGists(): void {
    this.gistsService.getUserGists().subscribe({
      next: (gists) => {
        this.gists = gists;
        this.isLoading = false;
      },
      error: () => {
        this.error = 'Error fetching user gists';
        this.isLoading = false;
      },
    });
  }
}
