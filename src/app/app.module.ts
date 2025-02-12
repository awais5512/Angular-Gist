import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './pages/home/home.module';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { routes } from './app.routes';
import { HeaderModule } from './components/header/header.module';
import { GistDetailsModule } from './pages/gist-details/gist-details.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    HomeModule,
    GistDetailsModule,
    HeaderModule,
  ],
  bootstrap: [AppComponent],
  providers: [provideHttpClient()],
})
export class AppModule {}
