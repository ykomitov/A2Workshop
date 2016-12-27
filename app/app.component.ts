import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'mvdb-app',
    templateUrl: './app.component.html'
})

export class AppComponent {
    constructor(private titleService: Title) {
        this.titleService.setTitle('Movies Workshop');
    }

    // public setTitle(newTitle: string) {
    //     this.titleService.setTitle(newTitle);
    // }
}
