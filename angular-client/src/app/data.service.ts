import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const apiUrl = 'https://b2bapi.lccportal.com/api/User/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    // 'x-access-token': localStorage.getItem('token')
  })
};

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUserList() {
		return this.http.get(apiUrl + 'GetUsers', httpOptions);
  }
  
  getUserDetails(userId) {
    return this.http.get(apiUrl + 'GetUserByUserId?UserId=' + userId, httpOptions);
  }
}
