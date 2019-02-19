import {PhotoService} from '../photo/photo.service';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Photo} from '../photo/photo';

/**
 * O resolver resolve as dependencias de um componente antes dele ser instanciado
 * Injetamos o que queremos usar no Construtor
 * "resolve()" - guarda dados relativos a rota
 */

@Injectable({providedIn: 'root'})
export class PhotoListResolver implements Resolve<Observable<Photo>> {

  constructor(private service: PhotoService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Photo> {
    const userName = route.params.userName;
    return this.service.UserList(userName, 1);
  }
}
