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

        console.log(url);
        return this.http.get(url)
            .map((response) => response.json())
            .map((res: any) => {
                let resultMovies: OmdbMovie[] = [];
                console.log(res);
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
}