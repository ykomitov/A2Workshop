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

        let searchCriteriaTest = { title: 'godfather', page: '1' };
        let url = 'http://www.omdbapi.com/?s=' + searchCriteriaTest.title + '&page=' + searchCriteriaTest.page;

        console.log(url);
        return this.http.get(url)
            .map((response) => response.json())
            .map((res: any) => {
                let resultMovies: OmdbMovie[] = [];
                if (res.Response) {
                    res.Search.forEach((m: any) => {
                        resultMovies.push(
                            new OmdbMovie(
                                m.imdbID,
                                m.Title,
                                m.Year,                            
                                m.Poster || '',
                                m.Type || '')
                        );
                    });

                    return new OmdbSearchResult(resultMovies, res.totalResults, res.Response);
                }
            });
    }
}