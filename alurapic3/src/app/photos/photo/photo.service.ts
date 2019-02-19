import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Photo} from './photo';


/**
 * //Assim colocamos um parametro dentro da URL para ficar assim 'url?page = 10'
 * new HttpParams().append() serve para injetar dentro da URL algum parametro,
 * passando para 'http.get' como um segundo parametro dentro do objeto {params: httpParams} .
 *
 */

const API = 'http://localhost:3000/';

@Injectable ({providedIn: 'root'})
export class PhotoService {

  constructor(public http: HttpClient) { }

  UserList(user: string, page: number) {
    const httpParams: HttpParams = new HttpParams().append('page', page.toString());
    return this.http.get<Photo>(API +  user + '/photos', {params: httpParams});
  }
}
