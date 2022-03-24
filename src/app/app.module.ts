import { AppRoutingModule } from './app-routing.module';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { FriendsComponent } from './friends/friends.component';
import { GamesComponent } from './games/games.component';
import { FriendComponent } from './friend/friend.component';
import { LibraryComponent } from './library/library.component';
import { LoginComponent } from './login/login.component';

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
    LoginComponent,
    GamesSearchPipe,
    IndieFilterPipe,
    ActionFilterPipe,
    AdventureFilterPipe,
    PriceFilterPipe
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    MatCardModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [MyGamesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
