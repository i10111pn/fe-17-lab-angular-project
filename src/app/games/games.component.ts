import { Component, OnInit} from '@angular/core';
import { MyGamesService } from '../services/my-games.service';

export class Game {
  title: string;
  price: number;
  description: string;
  genre: string;
  isInLibrary: boolean;
   
  constructor(title: string, price: number, description: string, genre: string, isInLibrary:boolean) {

      this.title = title;
      this.price = price;
      this.description = description;
      this.genre = genre;
      this.isInLibrary = isInLibrary;
  }
}

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})

export class GamesComponent implements OnInit {

  constructor(private service: MyGamesService) {

  }

  games: Game[] = [];

  ngOnInit() {

    if(this.service.games.length === 0) {
      this.service.games = this.service.createGames();
    }
    
    this.games = this.service.games;

    if(this.service.myGames.length === 0){

      for(let i = 0; i < 3;) {
        let randomIndex = Math.floor(Math.random() * this.games.length);
        let randomGameInLibrary = this.games[randomIndex];
        
        if(!this.service.myGames.includes(randomGameInLibrary)) {
        this.service.myGames.push(randomGameInLibrary)
        this.games[randomIndex].isInLibrary = true;
        i++;
        }

      }
      
    }

  }

  addToLibrary(game: Game) {
    game.isInLibrary = true;
    this.service.myGames.push(new Game(game.title, game.price, game.description, game.genre, game.isInLibrary))
  }

  searchGame = '';

  indieChecked = false;
  actionChecked = false;
  adventureChecked = false;

  maxPrice = '999';

}
