import { Component, OnInit } from '@angular/core';

import { TopService } from './../core/services/top.service';

declare var $:any;
// import 'rxjs';

// import { Movie } from './../core/models/movie';
// import { SortPipe } from './../core/pipes/SortPipe';
// import { SearchPipe } from './../core/pipes/SearchPipe';

@Component({
    selector: 'movies-top',
    templateUrl: './top.component.html'
})

export class TopComponent implements OnInit {
    topMovies: any;

    constructor(private topService: TopService) { }

    ngOnInit() {
        this.topMovies = this.topService.getTop10();
            //.subscribe(res => this.topMovies = res.text());
    }
}

