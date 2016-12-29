import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { OmdbMovieService } from './../core/services/omdb.service';
import { OmdbSearchResult } from './../core/models/omdbSearchResult';

@Component({
    selector: 'mvdb-omdb',
    templateUrl: './omdb-search.component.html'
})

export class OmdbSearchComponent {
    searchResult: OmdbSearchResult;
    searchObj: any;

    constructor(private titleService: Title, private movieService: OmdbMovieService) {
        this.titleService.setTitle('OMDb Movies');
    }

    searchOmdb(title: string) {
        this.searchObj = {
            title: title,
            page: 1
        }

        this.movieService.searchMovies(this.searchObj)
            .subscribe(res => this.searchResult = res);
    }

    pageChanged(newPage: number) {

        console.log('page request: ' + newPage);
        this.searchObj.page = newPage;
        this.movieService.searchMovies(this.searchObj)
            .subscribe(res => this.searchResult = res);
    }
}
