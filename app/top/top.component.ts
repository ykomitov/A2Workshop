import { Component, OnInit, DoCheck } from '@angular/core';
import { Movie } from './../core/models/movie';

import { TopService } from './../core/services/top.service';

@Component({
    selector: 'movies-top',
    templateUrl: './top.component.html'
})

export class TopComponent implements OnInit, DoCheck {
    topMovies: Movie[] = [];

    constructor(private topService: TopService) { }

    ngOnInit() {
        this.topService.getTop10Ids()
            .subscribe(res => this.topMovies = res);
    }

    ngDoCheck() {
        console.log(this.topMovies);
    }
}

