import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GistDetailsComponent } from './pages/gist-details/gist-details.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home Page',
  },
  { path: 'gist/:id', component: GistDetailsComponent },
];
