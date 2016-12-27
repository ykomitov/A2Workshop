import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'sort'
})

export class SortPipe implements PipeTransform {
    transform(items: any[], property: string, sortBy?: string) {
        if (!items) return []; // without this row we get an error if the data hasn't loaded yet
        if (sortBy === null || sortBy === 'desc') {
            return items.sort(
                (x, y) =>
                    y[property].toString()
                        .localeCompare(x[property].toString()));
        } else {
            return items.sort(
                (x, y) =>
                    x[property].toString()
                        .localeCompare(y[property].toString()));
        }
    }
};
