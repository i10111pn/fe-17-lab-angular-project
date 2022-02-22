import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FriendsComponent } from './friends/friends.component';
import { GamesComponent } from './games/games.component';
import { FormsModule } from '@angular/forms';

import { GamesSearchPipe } from './pipes/games-search.pipe';
import { IndieFilterPipe } from './pipes/indie-filter.pipe';
import { ActionFilterPipe } from './pipes/action-filter.pipe';
import { AdventureFilterPipe } from './pipes/adventure-filter.pipe';
import { PriceFilterPipe } from './pipes/price-filter.pipe';
import { LibraryComponent } from './library/library.component'
import { MyGamesService } from './services/my-games.service';


@NgModule({
  declarations: [
    AppComponent,
    FriendsComponent,
    GamesComponent,
    GamesSearchPipe,
    IndieFilterPipe,
    ActionFilterPipe,
    AdventureFilterPipe,
    PriceFilterPipe,
    LibraryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [MyGamesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
