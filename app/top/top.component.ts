import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Movie } from './../core/models/movie';

import { TopService } from './../core/services/top.service';

@Component({
    selector: 'movies-top',
    templateUrl: './top.component.html'
})

export class TopComponent implements OnInit, DoCheck, OnDestroy {
    topMovies: Movie[] = [];
    topMoviesKey: string = 'topMovies';
    updateCacheDate: string = 'lastUpdate';

    constructor(private topService: TopService) { }

    ngOnInit() {
        this.getMovies();
    }

    ngDoCheck() {

    }

    ngOnDestroy() {
        if (!localStorage[this.topMoviesKey]) {
            localStorage.setItem(this.topMoviesKey, JSON.stringify(this.topMovies));
            localStorage.setItem(this.updateCacheDate, new Date().getTime().toString());
        }
    }

    validateMovieCache(): boolean {
        let minutesToCache = 1;
        let currentDate = new Date().getTime().toString();
        let cacheReloadDate = new Date(localStorage[this.updateCacheDate] * 1 + 60000 * minutesToCache);
        
        return currentDate < cacheReloadDate.getTime().toString();
    }

    getMovies() {
        // If movies are cached in localStorage & the cache is valid
        if (localStorage[this.topMoviesKey] && this.validateMovieCache()) {
            this.topMovies = JSON.parse(localStorage[this.topMoviesKey]);
            return;
        } else {
            // clear localStorage & movies array
            this.topMovies = [];
            localStorage.removeItem(this.topMoviesKey);

            // update movies
            this.topService.getTop10Ids()
                .subscribe(res => this.topMovies = res);
        }
    }
}

