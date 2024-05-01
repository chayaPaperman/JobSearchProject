import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { error } from 'node:console';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {
  }
  getUserFromServer(userName: string, userPassword: string): Observable<any> {
    return this.http.get('https://localhost:44337/api/User/getUser', { params: { name: userName, password: userPassword } });
  }
  passwordValidator(password: string): string {
    let error: string = "";
    if (password!.length < 8)
      error += "Password must have at least 8 characters\n";
    if (password?.indexOf(' ') != -1)
      error += "Password cannot contain spaces";
    return error;
  }
}
