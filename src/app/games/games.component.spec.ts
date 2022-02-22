import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesComponent } from './games.component';

import { ActionFilterPipe } from '../pipes/action-filter.pipe';
import { AdventureFilterPipe } from '../pipes/adventure-filter.pipe';
import { GamesSearchPipe } from '../pipes/games-search.pipe';
import { IndieFilterPipe } from '../pipes/indie-filter.pipe';
import { PriceFilterPipe } from '../pipes/price-filter.pipe';

describe('GamesComponent', () => {
  let component: GamesComponent;
  let fixture: ComponentFixture<GamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        GamesComponent,
        ActionFilterPipe,
        AdventureFilterPipe,
        GamesSearchPipe,
        IndieFilterPipe,
        PriceFilterPipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
