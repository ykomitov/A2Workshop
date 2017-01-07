import { Component, OnInit, DoCheck, OnDestroy, Input } from '@angular/core';
import { Movie } from './../core/models/movie';

import { TopService } from './../core/services/top.service';

import { SortPipe } from './../core/pipes/SortPipe';
import { SearchPipe } from './../core/pipes/SearchPipe';

@Component({
    selector: 'movies-top',
    templateUrl: './top.component.html',
    providers: [SortPipe, SearchPipe]
})

export class TopComponent implements OnInit, DoCheck, OnDestroy {
    topMovies: Movie[] = [];
    moviesOriginal: Movie[];
    topMoviesKey: string = 'topMovies';
    updateCacheDate: string = 'lastUpdate';
    @Input() sort: any;

    constructor(private topService: TopService, private pipeSort: SortPipe, private pipeSearch: SearchPipe) { }

    ngOnInit() {
        this.getMovies();
    }

    ngDoCheck() {
        if (this.sort.search !== '' || this.moviesOriginal) {
            if (!this.moviesOriginal) {
                this.moviesOriginal = this.topMovies;
            }

            this.topMovies = this.searchMoviesTitle(this.sort.search);
        }

        this.transformMovies(this.sort);
    }

    transformMovies(sort: any) {
        this.pipeSort.transform(this.topMovies, sort.property, sort.type);
    }

    searchMoviesTitle(title: any) {
        return this.pipeSearch.transform(this.moviesOriginal, title);
    }

    ngOnDestroy() {
        if (!localStorage[this.topMoviesKey]) {
            console.log('writing cache');
            localStorage.setItem(this.topMoviesKey, JSON.stringify(this.topMovies));
            localStorage.setItem(this.updateCacheDate, new Date().getTime().toString());
        }
    }

    validateMovieCache(): boolean {
        let minutesToCache = 5;
        let currentDate = new Date().getTime().toString();
        let cacheReloadDate = new Date(localStorage[this.updateCacheDate] * 1 + 60000 * minutesToCache);

        return currentDate < cacheReloadDate.getTime().toString();
    }

    getMovies() {
        // If movies are cached in localStorage & the cache is valid
        if (localStorage[this.topMoviesKey] && this.validateMovieCache()) {
            console.log('from cache');
            this.topMovies = JSON.parse(localStorage[this.topMoviesKey]);
            return;
        } else {
            console.log('getting movies');
            // clear localStorage & movies array
            this.topMovies = [];
            localStorage.removeItem(this.topMoviesKey);

            // update movies
            this.topService.getTop10Ids()
                .subscribe(res => this.topMovies = res);
        }
    }
}

