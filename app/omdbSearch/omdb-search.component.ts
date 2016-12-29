import { Component, OnInit, DoCheck } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { OmdbMovieService } from './../core/services/omdb.service';
import { OmdbSearchResult } from './../core/models/omdbSearchResult';

@Component({
    selector: 'mvdb-omdb',
    templateUrl: './omdb-search.component.html'
})

export class OmdbSearchComponent implements OnInit, DoCheck {
    searchResult: OmdbSearchResult;

    constructor(private titleService: Title, private movieService: OmdbMovieService) {
        this.titleService.setTitle('OMDb Movies');
    }

    ngOnInit() {
        this.movieService.searchMovies({})
            .subscribe(res => this.searchResult = res);
    }

    ngDoCheck() {
        if (this.searchResult) {
            console.log(this.searchResult);
        }
    }

    searchOmdb(){
        console.log('search clicked');
    }
}
