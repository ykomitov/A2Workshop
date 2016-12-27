import {
    Component,
    OnInit
} from '@angular/core';

import {
    Http,
    Response
} from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs';

import { Movie } from './../core/models/movie';

@Component({
    selector: 'movies-list',
    templateUrl: './movies-list.component.html'
})

export class MoviesListComponent implements OnInit {

    movies: Movie[];

    constructor(private http: Http) { }

    ngOnInit() {
        this.http.get('./../data/movies.json')
            .map((response) => response.json())
            .map((movies: any[]) => {
                let result: Movie[] = [];
                if (movies) {
                    movies.forEach((m) => {
                        result.push(
                            new Movie(
                                m.imdbID,
                                m.Title,
                                m.Year,
                                m.imdbRating,
                                m.Released,
                                m.Runtime,
                                m.Genre,
                                m.Director,
                                m.Actors,
                                m.Plot,
                                m.Language,
                                m.Country,
                                m.Poster,
                                m.imdbRating,
                                m.imdbVotes,
                                m.Top250,
                                m.Type)
                        );
                    });
                    return result;
                }
            })
            .subscribe(movies => this.movies = movies);
    }
}
