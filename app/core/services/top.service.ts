import { Injectable } from '@angular/core';
import {
    Http,
    Response
} from '@angular/http';

import { OmdbMovieService } from './omdb.service';
import { Movie } from './../models/movie';

declare var $: any;

@Injectable()
export class TopService {
    movies: Movie[] = [];
    movie: any;

    constructor(private http: Http, private omdbService: OmdbMovieService) { }

    getTop10Ids() {
        // Go through cors-anywhere, to go around client browser security setting (CORS)
        let url = 'https://cors-anywhere.herokuapp.com/www.imdb.com/chart/top?ref_=ft_250';

        this.movies = [];
        let rank = 0;

        return this.http.get(url)
            .map(res => {
                let body = $('<div/>').append(res.text());
                let extractedIds = body.find('.titleColumn a').map(function () {
                    return this.href.split('/')[4];
                }).get();

                extractedIds.forEach((id: any) => {
                    let url = 'https://www.omdbapi.com/?i=' + id + '&plot=short&r=json';

                    return this.omdbService.getMovieDetails(url)
                        .subscribe(res => {
                            res.ImdbRank = ++rank;
                            this.movie = res;
                            this.movies.push(this.movie);
                        });
                })
            })
            .map(res => this.movies);
    }
}