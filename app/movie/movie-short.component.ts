import {
    Component,
    Input
} from '@angular/core';

import { Movie } from './../core/models/movie';

@Component({
    selector: '[mvdb-movie-short]',
    templateUrl: './movie-short.component.html'
})

export class MovieShortComponent {
    @Input() movie: Movie;
}
