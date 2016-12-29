export class OmdbMovie {
    ImdbID: string;
    Title: string;
    Year: string;
    Poster: string;
    Type: string;

    constructor(imdbId: any, title: any, year: any, poster: any, type: any) {
        this.ImdbID = imdbId;
        this.Title = title;
        this.Year = year;
        this.Poster = poster;
        this.Type = type;
    }
}