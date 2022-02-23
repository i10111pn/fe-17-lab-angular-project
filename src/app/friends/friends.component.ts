import { AfterContentChecked, Component, OnInit } from '@angular/core';
import UsersJson from 'src/users.json';


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
  toggle = false
  noUsers = false

  constructor() {}
  
  ngAfterContentChecked(): void {
    this.getdata();
  }

  ngOnInit() {
    this.update();
  }

  update() {
    if (localStorage.getItem('allUsers')) {
      this.Users = JSON.parse(localStorage.getItem('allUsers') || '{}');
    } else {
      localStorage.setItem('allUsers', JSON.stringify(this.Users))
      this.Users = JSON.parse(localStorage.getItem('allUsers') || '{}');
    }
  }

  getdata() {
    localStorage.setItem('allUsers', JSON.stringify(this.Users))
    this.myFriend = this.Users.filter(user => user.isFriend === true)
  }

  onClick(value: string) {
    this.noUsers = true
    this.toggle = true
    this.arr = this.Users.filter(user => user.first_name.toLowerCase().includes(value.toLowerCase()))
  }

  onInput(event: any) {
    this.noUsers = false
    if (!this.search.trim()) {
      this.toggle = false
    }
  }
}
