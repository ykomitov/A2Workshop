import { Component, Input, Output, DoCheck, EventEmitter } from '@angular/core';
import { OmdbSearchResult } from './../core/models/omdbSearchResult';

@Component({
    selector: 'mvdb-omdb-result',
    templateUrl: './omdb-result.component.html'
})

export class OmdbResultComponent implements DoCheck {
    @Input() searchResult: OmdbSearchResult;
    @Input() searchObj: any;
    @Output() pageChanged = new EventEmitter<number>();
    totalPages: number;

    ngDoCheck() {
        if (this.searchResult) {
            this.totalPages = Math.ceil(this.searchResult.totalResult / 10);
        }
    }

    changePage(newPage: number) {
        console.log(newPage);
        let input = newPage;
        if (input < 1) {
            input = 1;
        } else if (input > this.totalPages) {
            input = this.totalPages;
        }

        this.pageChanged.emit(input);
    }
}
