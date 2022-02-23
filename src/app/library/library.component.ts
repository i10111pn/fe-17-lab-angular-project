import { Component, OnInit } from '@angular/core';
import { Game } from '../games/games.component';
import { MyGamesService } from '../services/my-games.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

  myGames: Game[] = [];

  constructor(private service: MyGamesService) { }

  ngOnInit(): void {

    if(this.service.games.length === 0) {
      this.service.games = this.service.createGames();
    }
    
    this.myGames = this.service.myGames;

    if(this.service.myGames.length === 0){

      for(let i = 0; i < 3;) {
        let randomIndex = Math.floor(Math.random() * this.service.games.length);
        let randomGameInLibrary = this.service.games[randomIndex];
        
        if(!this.service.myGames.includes(randomGameInLibrary)) {
        this.service.myGames.push(randomGameInLibrary)
        this.service.games[randomIndex].isInLibrary = true;
        i++;
        }

      }
      
    }
  }

}
