import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { OmdbMovieService } from './../core/services/omdb.service';
import { Movie } from './../core/models/movie';

@Component({
    selector: 'mvdb-omdb',
    templateUrl: './omdb-search.component.html'
})

export class OmdbSearchComponent implements OnInit {
movies: Movie[];

    constructor(private titleService: Title, private movieService: OmdbMovieService) {
        this.titleService.setTitle('OMDb Movies');
    }

    ngOnInit() {
        this.movies = this.movieService.searchMovies({});

        //console.log(this.movies);
    }
}
