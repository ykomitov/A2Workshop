import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { MoviesListComponent } from './movie/movies-list.component';
import { MovieShortComponent } from './movie/movie-short.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { HomeComponent } from './home/home.component';
import { OmdbSearchComponent } from './omdb/omdb-search.component';
import { OmdbResultComponent } from './omdb/omdb-result.component';
import { OmdbDetailComponent } from './omdb/omdb-detail.component';
import { TopComponent } from './top/top.component';

import { OmdbMovieService } from './core/services/omdb.service';
import { TopService } from './core/services/top.service';

import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';

import { SortPipe } from './core/pipes/SortPipe';
import { SearchPipe } from './core/pipes/SearchPipe';

import { RatingModule } from "./../node_modules/ng2-rating/index.js";

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'top', component: TopComponent },
    { path: 'omdb/:title/:page', component: OmdbSearchComponent },
    { path: 'omdb', component: OmdbSearchComponent },
    { path: 'omdb/:id', component: OmdbDetailComponent },
    { path: '**', redirectTo: '/home' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
        BrowserModule,
        HttpModule,
        RatingModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        MoviesListComponent,
        MovieShortComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        OmdbSearchComponent,
        OmdbResultComponent,
        OmdbDetailComponent,
        TopComponent,

        SortPipe,
        SearchPipe],
    bootstrap: [AppComponent],
    providers: [Title, OmdbMovieService, TopService]
})


export class AppModule { }
