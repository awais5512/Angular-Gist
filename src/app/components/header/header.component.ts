import { Component, computed, signal } from '@angular/core';
import { User } from 'firebase/auth';
import { Observable } from 'rxjs';
import { FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  title = signal('DEMO-LOGO');
  menuOpen = false;
  user$: Observable<User | null>;

  constructor(
    private firebaseService: FirebaseService,
    private router: Router
  ) {
    this.user$ = this.firebaseService.user$;
  }

  async loginWithGitHub() {
    await this.firebaseService.signInWithGitHub();
  }

  async logout() {
    await this.firebaseService.signOutUser();
    this.menuOpen = false;
    this.router.navigate(['/']);
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
