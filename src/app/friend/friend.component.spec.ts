import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendComponent } from './friend.component';

describe('FriendComponent', () => {
  let component: FriendComponent;
  let fixture: ComponentFixture<FriendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FriendComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendComponent);
    component = fixture.componentInstance;
    component.user = {
      id: 1,
      first_name: 'String',
      isFriend: false
    }
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});