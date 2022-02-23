import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FriendsComponent } from './friends/friends.component';
import { GamesComponent } from './games/games.component';
import { FriendComponent } from './friend/friend.component';
import { LibraryComponent } from './library/library.component';

import { GamesSearchPipe } from './pipes/games-search.pipe';
import { IndieFilterPipe } from './pipes/indie-filter.pipe';
import { ActionFilterPipe } from './pipes/action-filter.pipe';
import { AdventureFilterPipe } from './pipes/adventure-filter.pipe';
import { PriceFilterPipe } from './pipes/price-filter.pipe';

import { MyGamesService } from './services/my-games.service';

@NgModule({
  declarations: [
    AppComponent,
    FriendsComponent,
    GamesComponent,
    FriendComponent,
    LibraryComponent,
    GamesSearchPipe,
    IndieFilterPipe,
    ActionFilterPipe,
    AdventureFilterPipe,
    PriceFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NoopAnimationsModule
  ],
  providers: [MyGamesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
