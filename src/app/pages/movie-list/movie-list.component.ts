import { Component } from '@angular/core';
import {NgClass, NgStyle} from '@angular/common';
import {StarRatingComponent} from '../../components/star-rating/star-rating.component';
import {MovieService} from '../../services/movie.service';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-movie-list',
  imports: [
    NgStyle,
    StarRatingComponent,
    TranslatePipe
  ],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss'
})
export class MovieListComponent {

  movies : any[] = []

  constructor(private movieService: MovieService) {
  }

  /**
   * Sera appelée via le clique d'un bouton
   */
  callApi() {
    this.movieService.getMovies().subscribe({
      next: responseJson => {
        // je vais récupérer dans tout le json uniquement l'attribt data => la liste des films
        // rappel le json actuelle => code, message, data (array movies)
        this.movies = responseJson.data;
      },
      error: error => {}
    });
  }
}
