import { Component, OnInit, DoCheck } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { OmdbMovieService } from './../core/services/omdb.service';
import { OmdbSearchResult } from './../core/models/omdbSearchResult';

@Component({
    selector: 'mvdb-omdb',
    templateUrl: './omdb-search.component.html'
})

export class OmdbSearchComponent implements OnInit, DoCheck {
    searchResult: OmdbSearchResult;
    searchObj: any = {};
    router: Router;

    constructor(private titleService: Title, private movieService: OmdbMovieService, _router: Router) {
        this.titleService.setTitle('OMDb Movies');
        this.router = _router;
    }

    ngDoCheck() {
        if (this.searchResult && +this.searchResult.totalResult <= 10) {
            this.searchObj.nextPage = 1;
        }

        this.setPages(this.searchObj.page);
    }

    ngOnInit() {
        let urlParams = this.router.url.split('/');
        let movie = urlParams[2];
        let page = urlParams[3];

        if (movie && page) {

            this.searchObj.title = movie.split('%20').join(' ');
            this.searchObj.page = page;

            this.movieService.searchMovies(this.searchObj)
                .subscribe(res => this.searchResult = res);

            this.setPages(+page);
        }
    }

    searchOmdb(title: string) {
        this.router.navigateByUrl('/omdb/' + title + '/1');
        this.searchObj.title = title;
        this.searchObj.page = 1;

        this.movieService.searchMovies(this.searchObj)
            .subscribe(res => this.searchResult = res);
    }

    pageChanged(newPage: string) {
        let newNumber = +(newPage.substring(1));
        newPage[0] === 'n' ? newNumber++ : newNumber--;

        if (this.searchResult.totalResult <= 10) {
            return;
        }

        if (newNumber < 1) {
            newNumber = 1;
            return;
        }

        this.searchObj.page = newNumber;
        this.setPages(newNumber);

        this.movieService.searchMovies(this.searchObj)
            .subscribe(res => this.searchResult = res);
    }

    setPages(page: number) {
        let previous = +(page) - 1;
        let next = +(page) + 1;

        previous <= 0 ? this.searchObj.previousPage = 1 : this.searchObj.previousPage = previous;

        if (!this.searchResult || next < Math.ceil(this.searchResult.totalResult / 10)) {
            this.searchObj.nextPage = next;
        }
    }
}
