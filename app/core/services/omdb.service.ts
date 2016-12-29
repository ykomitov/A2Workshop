import { Injectable } from '@angular/core';
import {
    Http,
    Response
} from '@angular/http';

import { Movie } from './../models/movie';

@Injectable()
export class OmdbMovieService {
    movies: Movie[];

    constructor(private http: Http) { }

    searchMovies(searchCriteria: any) {

        let searchCriteriaTest = { title: 'godfather', page: '1' };
        let url = 'http://www.omdbapi.com/?s=' + searchCriteriaTest.title + '&page=' + searchCriteriaTest.page;

        console.log(url);
        this.http.get(url)
            .map((response) => response.json())
            .map((movies: any) => {
                let result: Movie[] = [];
                if (movies.Response) {
                    console.log(movies);
                    movies.Search.forEach((m: any) => {
                        result.push(
                            new Movie(
                                m.imdbID,
                                m.Title,
                                m.Year,
                                m.imdbRating,
                                m.Released,
                                m.Runtime || '',
                                m.Genre || '',
                                m.Director || '',
                                m.Actors || '',
                                m.Plot || '',
                                m.Language || '',
                                m.Country || '',
                                m.Poster || '',
                                m.imdbRating || 0,
                                m.imdbVotes || '',
                                m.Top250 || 0,
                                m.Type || '')
                        );
                    });
                    return result;
                }
            })
            .subscribe(movies => this.movies = movies);

        return this.movies;
    }
}