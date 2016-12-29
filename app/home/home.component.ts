import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'mvdb-home',
    templateUrl: './home.component.html'
})

export class HomeComponent {

    sortObj = {
        property: 'ImdbRating',
        type: 'desc',
        search: ''
    }

    constructor(private titleService: Title) {
        this.titleService.setTitle('Movies Workshop');
    }

    sortBy(property: any) {
        this.sortObj.property = property;
    }

    sortType(type: any) {
        this.sortObj.type = type;
    }

    searchForTitle(title: any){
        this.sortObj.search = title;
    }
}
