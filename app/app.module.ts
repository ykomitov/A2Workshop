import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MoviesListComponent } from './movie/movies-list.component';
import { MovieShortComponent } from './movie/movie-short.component';

import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';

import { SortPipe } from './core/pipes/SortPipe';
import { SearchPipe } from './core/pipes/SearchPipe';

@NgModule({
    imports: [BrowserModule, HttpModule],
    declarations: [
        AppComponent, 
        MoviesListComponent, 
        MovieShortComponent,
        SortPipe,
        SearchPipe],
    bootstrap: [AppComponent],
    providers: [Title]
})
export class AppModule { }
