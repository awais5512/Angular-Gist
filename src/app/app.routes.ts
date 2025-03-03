import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GistDetailsComponent } from './pages/gist-details/gist-details.component';
import { CreateGistComponent } from './pages/create-gist/create-gist.component';
import { GistUserProfileComponent } from './pages/gist-user-profile/gist-user-profile.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home Page',
  },
  {
    path: 'gist-user-profile',
    component: GistUserProfileComponent,
    title: 'Gist User Profile',
    canActivate: [AuthGuard],
  },
  {
    path: 'gist/create',
    component: CreateGistComponent,
    title: 'Create Gist',
    canActivate: [AuthGuard],
  },
  { path: 'gist/:id', component: GistDetailsComponent, title: 'Gist Details' },
];
