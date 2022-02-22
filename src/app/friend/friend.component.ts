import { Component, Input, OnInit} from '@angular/core';
import { USERS } from '../friends/friends.component';



@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.scss']
})
export class FriendComponent implements OnInit{
  @Input() user!: USERS;
  @Input() users: any;
  @Input() myFriend:any;
  @Input() search=''
  @Input() btnToggle!:boolean



  constructor() { }

  ngOnInit(): void {

  }

  add(){
    this.user.isFriend=true

  }
  remove(){
    this.user.isFriend=false
  }
  
}
