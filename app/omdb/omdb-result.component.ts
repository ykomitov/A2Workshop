import { Component, Input, Output, DoCheck, EventEmitter } from '@angular/core';
import { OmdbSearchResult } from './../core/models/omdbSearchResult';

@Component({
    selector: 'mvdb-omdb-result',
    templateUrl: './omdb-result.component.html'
})

export class OmdbResultComponent implements DoCheck {
    @Input() searchResult: OmdbSearchResult;
    @Input() searchObj: any;
    @Output() pageChanged = new EventEmitter<string>();
    totalPages: any;

    ngDoCheck() {
        if (this.searchResult) {
            this.totalPages = Math.ceil(this.searchResult.totalResult / 10);
        }
    }

    changePage(newPage: string) {
        console.log(newPage);
        this.pageChanged.emit(newPage);
    }
}
