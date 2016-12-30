import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { OmdbMovieService } from './../core/services/omdb.service';
import { Movie } from './../core/models/movie';

@Component({
    selector: 'mvdb-omdb-detail',
    templateUrl: './omdb-detail.component.html'
})

export class OmdbDetailComponent implements OnInit {
    movie: Movie;
    router: Router;

    constructor(private titleService: Title, private movieService: OmdbMovieService, private ngRouter: Router) {
        this.titleService.setTitle('OMDb Movies');
        this.router = ngRouter;
    }


    ngOnInit() {
        let movieId = this.router.url.split('/')[2];
        let url = 'http://www.omdbapi.com/?i=' + movieId + '&plot=short&r=json';

        this.movieService.getMovieDetails(url)
            .subscribe(res => this.movie = res);
    }
}
