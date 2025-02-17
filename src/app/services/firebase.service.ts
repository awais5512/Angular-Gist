import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GithubAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  User,
  UserCredential,
} from 'firebase/auth';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private app = initializeApp(environment.firebaseConfig);
  private auth = getAuth(this.app);
  private userSubject = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject.asObservable();

  constructor() {
    onAuthStateChanged(this.auth, (user) => {
      this.userSubject.next(user);
    });
  }

  isAuthenticated() {
    return this.userSubject.getValue() !== null;
  }

  async signInWithGitHub(): Promise<UserCredential> {
    const provider = new GithubAuthProvider();
    provider.addScope('gist');
    const result = await signInWithPopup(this.auth, provider);

    const credential = GithubAuthProvider.credentialFromResult(result);

    const accessToken = credential?.accessToken;

    if (accessToken) {
      localStorage.setItem('githubAccessToken', accessToken);
    }

    return result;
  }

  async signOutUser(): Promise<void> {
    localStorage.removeItem('githubAccessToken');
    return signOut(this.auth);
  }

  async getAuthToken(): Promise<string | null> {
    const user = this.userSubject.getValue();
    return user ? await user.getIdToken() : null;
  }
}
