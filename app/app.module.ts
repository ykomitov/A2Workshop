import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MoviesListComponent } from './movie/movies-list.component';
import { MovieShortComponent } from './movie/movie-short.component';

import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
    imports: [BrowserModule, HttpModule],
    declarations: [AppComponent, MoviesListComponent, MovieShortComponent],
    bootstrap: [AppComponent]   
})
export class AppModule { }
