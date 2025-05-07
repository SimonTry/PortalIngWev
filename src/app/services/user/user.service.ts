import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private api_url='http://localhost:3000/api/usuarios'

  constructor(private http: HttpClient) { }


  addUser(user: User): Observable<any>{
    const endpoint = `${this.api_url}/addUser`;
    return this.http.post(endpoint, user);
  }

  getUsers(): Observable<User[]>{
    const endpoint = this.api_url;
    const headers = {
      'Content-Type':"application/json",
      'Authorization': `Bearer ${localStorage.getItem('AuthToken')}`
    }
    return this.http.get<User[]>(endpoint,{headers});
  }

  changeUserStatus(userId?: string, estado?: string){
    const endpoint = `${this.api_url}/ChangeStatus/${userId}`;
    const headers = {
      'Content-Type':"application/json",
      'Authorization': `Bearer ${localStorage.getItem('AuthToken')}`
    }
    const body = {estado};
    return this.http.post<User[]>(endpoint,body,{headers});
  }


  getUserById(id:string){
    const endpoint = `${this.api_url}/${id}`;
    const headers = {
      'Content-Type':"application/json",
      'Authorization': `Bearer ${localStorage.getItem('AuthToken')}`
    }
    return this.http.get<User>(endpoint,{headers});
  }

  udpateUser(userId:string, userData: User){
    const endpoint = `${this.api_url}/${userId}`;
    const headers = {
      'Content-Type':"application/json",
      'Authorization': `Bearer ${localStorage.getItem('AuthToken')}`
    }
    return this.http.post<User>(endpoint,userData,{headers});
  }
}
