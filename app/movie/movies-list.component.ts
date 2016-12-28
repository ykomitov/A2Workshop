import {
    Component,
    OnInit,
    DoCheck,
    Input
} from '@angular/core';

import {
    Http,
    Response
} from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs';

import { Movie } from './../core/models/movie';
import { SortPipe } from './../core/pipes/SortPipe';
import { SearchPipe } from './../core/pipes/SearchPipe';

@Component({
    selector: 'movies-list',
    templateUrl: './movies-list.component.html',
    providers: [SortPipe, SearchPipe]
})

export class MoviesListComponent implements OnInit, DoCheck {

    movies: Movie[];
    moviesOriginal: Movie[];
    @Input() sort: any;

    constructor(private http: Http, private pipeSort: SortPipe, private pipeSearch: SearchPipe) { }

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

    ngDoCheck() {
        if (this.sort.search !== '' || this.moviesOriginal) {
            if (!this.moviesOriginal) {
                this.moviesOriginal = this.movies;
            }

            this.movies = this.searchMoviesTitle(this.sort.search);
        }

        this.transformMovies(this.sort);
    }

    transformMovies(sort: any) {
        this.pipeSort.transform(this.movies, sort.property, sort.type);
    }

    searchMoviesTitle(title: any) {
        return this.pipeSearch.transform(this.moviesOriginal, title);
    }
}

