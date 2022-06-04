import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class GetUserDetailsService {

  constructor(private http:HttpClient) { }
  private apiUrl:string = environment.apiUrl

  getUsers(searchString:any){
    return this.http.get(`${this.apiUrl}search/users?q=${searchString} in:name type:user`)
  }
 
  getUserDetail(username:any){
   return this.http.get(`${this.apiUrl}users/${username}`)
  }
}
