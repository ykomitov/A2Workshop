import { Injectable } from '@angular/core';
import {
    Http,
    Response
} from '@angular/http';
declare var $: any;

@Injectable()
export class TopService {

    constructor(private http: Http) { }

    getTop10() {

        let url = 'https://cors-anywhere.herokuapp.com/www.imdb.com/chart/top?ref_=ft_250';

        return this.http.get(url)
            .toPromise()
            .then(this.extractData);
        //.map((response) => response.json());
    }

    private extractData(res: Response) {
        let body = $('<div/>').append(res.text()); 
        console.log(body.find('.titleColumn a').map(function() {
        return this.href;
    }).get());
        return body || 'nothing returned';
    }
}