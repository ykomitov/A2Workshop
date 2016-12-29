import { OmdbMovie } from './omdbMovie';

export class OmdbSearchResult {
    movies: OmdbMovie[];
    totalResult: number;
    response: boolean;

    constructor(resultMovies: OmdbMovie[], resultCount: number, success: boolean) {
        this.movies = resultMovies;
        this.totalResult = resultCount;
        this.response = success;
    }
}