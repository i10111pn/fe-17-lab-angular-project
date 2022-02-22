import { AfterContentChecked, Component, OnInit } from '@angular/core';
// import UsersJson from '../users.json';
import UsersJson from '../users2.json';


export interface USERS {
  id: Number;
  first_name: String;
  isFriend: boolean
}

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit, AfterContentChecked {
  Users: USERS[] = UsersJson;
  arr: any = []
  myFriend: any = []
  search = ''
  btnToggle = false

  constructor() {
  }
  ngAfterContentChecked():void{

    this.getdata();
    
  }
  ngOnInit() {
    this.update();
    this.getdata();
  }
   update() {
     if(localStorage.getItem('allUsers')){
      this.Users = JSON.parse(localStorage.getItem('allUsers') || '{}');
      // console.log(this.Users);
      
      let all = JSON.parse(localStorage.getItem('allUsers') || '{}');
      this.myFriend = all.filter((user: { isFriend: boolean; }) => user.isFriend === true)
     }else{
       localStorage.setItem('allUsers', JSON.stringify(this.Users))
       this.Users = JSON.parse(localStorage.getItem('allUsers') || '{}');
     }
  }

  getdata(){
    localStorage.setItem('allUsers', JSON.stringify(this.Users))
    this.myFriend = this.Users.filter(user => user.isFriend === true)
  }

  onClick(value: string) {
      this.btnToggle = true
      this.arr = this.Users.filter(user => user.first_name.toLowerCase().includes(value.toLowerCase()))
      console.log(this.arr);
      
  }
  
  onInput(event: any) {
    
    if (!this.search.trim()) {
      console.log(this.Users);
      this.btnToggle = false
      this.myFriend = this.Users.filter(user => user.isFriend === true)
      // this.myFriend = JSON.parse(localStorage.getItem('storedUsers') || '{}');
      // localStorage.setItem('storedUsers', JSON.stringify(this.myFriend));
      console.log(this.Users);
      
    }
  }
}
