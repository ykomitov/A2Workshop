import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'mvdb-app',
    templateUrl: './app.component.html'
})

export class AppComponent {

    // sortObj = {
    //     property: 'ImdbRating',
    //     type: 'desc',
    //     search: ''
    // }

    constructor(private titleService: Title) {
        this.titleService.setTitle('Movies Home');
    }

    // sortBy(property: any) {
    //     this.sortObj.property = property;
    // }

    // sortType(type: any) {
    //     this.sortObj.type = type;
    // }

    // searchForTitle(title: any){
    //     this.sortObj.search = title;
    // }
}
