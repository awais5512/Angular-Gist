import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  title = signal('DEMO-LOGO');

  isLoggedIn = true;
  menuOpen = false;

  // constructor(private authService: AuthService) {}

  ngOnInit() {
    // this.authService.getUser().subscribe((userData) => {
    //   this.isLoggedIn = !!userData;
    //   this.user = userData;
    // });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  logout() {
    // this.authService.logout();
    this.menuOpen = false;
  }
}
