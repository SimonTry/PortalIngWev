import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-list',
  imports: [MaterialModule, CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  userList: User[] = [];

  constructor(private userService: UserService){

  }

  ngOnInit(){
    this.getUser();
  }

  getUser(){
    this.userService.getUsers().subscribe(
      {
        next: (res) =>{
          this.userList = res;
        },
        error: (err)=>{
          if(err.status === 403){
            localStorage.removeItem('AuthToken');
            // this.router
          }
        }
      }
    )
  }
}
