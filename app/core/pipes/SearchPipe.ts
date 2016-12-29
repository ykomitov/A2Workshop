import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'search'
})

export class SearchPipe implements PipeTransform {
    transform(movies: any[], search: string) {
        if (!movies) return []; // without this row we get an error if the data hasn't loaded yet

        if(search === ''){
            return movies;
        }

        return movies.filter(m => m.Title.toLowerCase().includes(search.toLowerCase()));
    }
};
