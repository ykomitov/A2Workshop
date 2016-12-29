import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MoviesListComponent } from './movie/movies-list.component';
import { MovieShortComponent } from './movie/movie-short.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { HomeComponent } from './home/home.component';
import { OmdbSearchComponent } from './omdbSearch/omdb-search.component';

import { OmdbMovieService } from './core/services/omdb.service';

import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';

import { SortPipe } from './core/pipes/SortPipe';
import { SearchPipe } from './core/pipes/SearchPipe';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'omdb', component: OmdbSearchComponent },
    { path: '**', redirectTo: '/home' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
        BrowserModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        MoviesListComponent,
        MovieShortComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        OmdbSearchComponent,
        SortPipe,
        SearchPipe],
    bootstrap: [AppComponent],
    providers: [Title, OmdbMovieService]
})


export class AppModule { }
