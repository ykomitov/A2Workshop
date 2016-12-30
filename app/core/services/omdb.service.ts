import { Injectable } from '@angular/core';
import {
    Http,
    Response
} from '@angular/http';

import { Movie } from './../models/movie';
import { OmdbMovie } from './../models/omdbMovie';
import { OmdbSearchResult } from './../models/omdbSearchResult';

@Injectable()
export class OmdbMovieService {
    searchResult: OmdbSearchResult;

    constructor(private http: Http) { }

    searchMovies(searchCriteria: any) {

        let url = 'http://www.omdbapi.com/?s=' + searchCriteria.title + '&page=' + searchCriteria.page;

        return this.http.get(url)
            .map((response) => response.json())
            .map((res: any) => {
                let resultMovies: OmdbMovie[] = [];
                if (res.Response && res.Response !== 'False') {
                    res.Search.forEach((m: any) => {
                        resultMovies.push(
                            new OmdbMovie(
                                m.imdbID,
                                m.Title,
                                m.Year || '',
                                m.Poster || '',
                                m.Type || '')
                        );
                    });

                    return new OmdbSearchResult(resultMovies, res.totalResults, res.Response);
                } else {
                    return new OmdbSearchResult(resultMovies, 0, false);
                }
            });
    }

    getMovieDetails(queryUrl: string) {
        return this.http.get(queryUrl)
            .map((response) => response.json())
            .map((res: any) => {
                if (res.Response && res.Response !== 'False') {
                    console.log(res);
                    return new Movie(
                        res.imdbID,
                        res.Title,
                        res.Year,
                        res.imdbRating,
                        res.Released,
                        res.Runtime,
                        res.Genre,
                        res.Director,
                        res.Actors,
                        res.Plot,
                        res.Language,
                        res.Country,
                        res.Poster,
                        res.imdbRating,
                        res.imdbVotes,
                        res.Top250,
                        res.Type)
                }
            });
    }
}