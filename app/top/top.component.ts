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

    constructor(private topService: TopService) { }

    ngOnInit() {

        var moviesLastUpdated = localStorage['lastUpdate'];
        var currentDate = new Date();
        var currentDateAsSeconds = currentDate.getTime().toString();
        var cacheReloadDate = new Date(moviesLastUpdated * 1 + 60000);


        console.log('current date: ' + currentDateAsSeconds);
        console.log('last update: ' + moviesLastUpdated);
        console.log('valid until: ' + cacheReloadDate.getTime().toString());
        console.log('is valid: ' + (currentDateAsSeconds < cacheReloadDate.getTime().toString()));

        if (localStorage[this.topMoviesKey] && (currentDateAsSeconds < cacheReloadDate.getTime().toString())) {
            console.log('movies from localStorage');
            this.topMovies = JSON.parse(localStorage[this.topMoviesKey]);
            return;
        } else {
            if (!(currentDateAsSeconds < cacheReloadDate.getTime().toString())) {
                console.log('MOVIES RELOADING...');
            }
            this.topMovies = [];
            localStorage.removeItem(this.topMoviesKey);
            console.log('calling movies service');
            this.topService.getTop10Ids()
                .subscribe(res => this.topMovies = res);
        }
    }

    ngDoCheck() {

    }

    ngOnDestroy() {

        if (!localStorage[this.topMoviesKey]) {

            console.log('movies saved to localStorage');

            localStorage.setItem(this.topMoviesKey, JSON.stringify(this.topMovies));
            localStorage.setItem('lastUpdate', new Date().getTime().toString());
        }
    }
}

