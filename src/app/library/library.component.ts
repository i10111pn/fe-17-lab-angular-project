import { Component, OnInit } from '@angular/core';
import { Game } from '../games/games.component';
import { MyGamesService } from '../services/my-games.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

  myGames: Game[] = []

  constructor(private service: MyGamesService) { }

  ngOnInit(): void {
    this.myGames = this.service.myGames;
  }

}
