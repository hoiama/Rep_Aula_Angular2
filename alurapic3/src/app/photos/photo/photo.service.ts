import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Photo} from './photo';

const API = 'http://localhost:3000';

@Injectable ({providedIn: 'root'})
export class PhotoService {

  constructor(public http: HttpClient) { }
  UserList(user: string) {
   return this.http.get<Photo>(API + '/' +  user + '/photos');
  }
}
