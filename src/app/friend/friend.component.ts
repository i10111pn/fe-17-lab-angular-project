import { Component, Input} from '@angular/core';
import { USERS } from '../friends/friends.component';



@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.scss']
})
export class FriendComponent {
  @Input()user!: USERS;
  @Input() users: any;
  @Input() myFriend:any;
  @Input() search=''
  @Input() btnToggle!:boolean



  constructor() { }



  add(){
    this.user.isFriend=true

  }
  remove(){
    this.user.isFriend=false
  }
  
}
