import { Injectable } from '@angular/core';
import { Game } from '../games/games.component';

@Injectable({
  providedIn: 'root'
})
export class MyGamesService {

  createGame(gameNumber:number) {
    let genres = ['indie', 'action', 'adventure'];
    let title = `Game ${gameNumber}`;
    let price = Math.floor(Math.random() * (999 - 99) + 99);
    let description = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis facere fugiat cum ratione assumenda quaerat consectetur nostrum corporis, ipsum animi.';
    let genre = genres[Math.floor(Math.random() * 3)];
    let isInLibrary = false;
    return new Game(title, price, description, genre, isInLibrary);
  }

  createGames() {
    let games = [];
    for(let i = 1; i <=20; i++){
      games.push(this.createGame(i));
    }
    return games;
  }

  games: Game[] = [];

  myGames: Game[] = [];

  constructor() { }
}
