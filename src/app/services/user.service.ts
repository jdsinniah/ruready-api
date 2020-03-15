import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../models/user';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUserUrl = 'http://localhost:8000/ruready-api/user';
  private saveUserUrl = this.baseUserUrl + '/save';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  saveUser(user: User): Observable<User> {
    return this.http
      .post<User>(this.saveUserUrl, user, this.httpOptions)
      .pipe(
        tap((newUser: User) => console.log(`Registered new user with id=${newUser.id}`))
      );
  }

}
