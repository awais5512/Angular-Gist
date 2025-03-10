import { Component, OnInit } from '@angular/core';
import { GistsService } from '../../services/gists.service';
import { Gist } from '../../types/gists.types';
import { FirebaseService } from '../../services/firebase.service';
import { User } from 'firebase/auth';
import { finalize, Observable, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-gist-user-profile',
  standalone: false,
  templateUrl: './gist-user-profile.component.html',
  styleUrl: './gist-user-profile.component.css',
})
export class GistUserProfileComponent {
  gists$: Observable<Gist[]>;
  user$: Observable<User | null>;
  isLoading: boolean = true;
  error: string = '';

  constructor(
    private firebaseService: FirebaseService,
    private gistsService: GistsService
  ) {
    this.user$ = this.firebaseService.user$;

    this.gists$ = this.user$.pipe(
      switchMap((user) => user ? this.gistsService.getUserGists() : of([])),
      finalize(() => (this.isLoading = false))
    );
  }

  getScreenName(user: User | null) {
    return (user as any)?.reloadUserInfo?.screenName || null;
  }

  gistIdentifier(index: number, gist: Gist) {
    return gist.id;
  }
}
