import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'mvdb-omdb',
    templateUrl: './omdb-search.component.html'
})

export class OmdbSearchComponent {

    constructor(private titleService: Title) {
        this.titleService.setTitle('OMDb Movies');
    }
}
