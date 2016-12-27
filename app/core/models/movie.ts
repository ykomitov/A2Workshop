export class Movie {
    ImdbID: string;
    Title: string;
    Year: number;
    ImdbRating: number;
    ReleaseDate: Date;
    Runtime: number;
    Genre: string[];
    Director: string;
    Actors: string[];
    Plot: string;
    Language: string;
    Country: string;
    Poster: string;
    Rating: number;
    VotesCount: number;
    ImdbRank: number;
    Type: string;

    constructor(imdbId: any, title: any, year: any, imdbRating: any, releaseDate: any, runtime: any, genre: any, director: any, actors: any, plot: any, language: any, country: any, poster: any, rating: any, votesCount: any, rank:any, type: any) {
        this.ImdbID = imdbId;
        this.Title = title;
        this.Year = +(year);
        this.ImdbRating = +(imdbRating);
        this.ReleaseDate = new Date(releaseDate);
        this.Runtime = +runtime.split(' ')[0];
        this.Genre = genre.split(', ');
        this.Director = director;
        this.Actors = actors.split(', ');
        this.Plot = plot;
        this.Language = language;
        this.Country = country;
        this.Poster = poster;
        this.Rating = +(rating);
        this.VotesCount = votesCount.split(',').join('');
        this.ImdbRank = rank;
        this.Type = type;
    }
}