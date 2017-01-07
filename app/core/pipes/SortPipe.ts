import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'sort'
})

export class SortPipe implements PipeTransform {
    transform(items: any[], property: string, sortBy?: string) {
        if (!items) return []; // without this row we get an error if the data hasn't loaded yet
        if (sortBy === null || sortBy === 'desc') {
            if (property === 'ImdbRank') {
                return items.sort((x, y) => y[property] - x[property])
            }

            return items.sort(
                (x, y) =>
                    y[property].toString()
                        .localeCompare(x[property].toString()));

        } else {
            if (property === 'ImdbRank') {
                return items.sort((x, y) => x[property] - y[property])
            }

            return items.sort(
                (x, y) =>
                    x[property].toString()
                        .localeCompare(y[property].toString()));
        }
    }
};
