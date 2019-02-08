import {Pipe, PipeTransform} from '@angular/core';
import {Photo} from '../photo/photo';

@Pipe({name: 'filtroPorDescricao'})
export class PhotoFiltroDescricao implements PipeTransform {

  filtroLowCase = '';

  transform(photoList: Photo[], filtro: string) {
    this.filtroLowCase = filtro
      .trim()
      .toLowerCase();

    console.log(this.filtroLowCase);

    if (this.filtroLowCase) {
      return photoList.filter(EachPhoto => {
        return EachPhoto.description.toLowerCase().includes(this.filtroLowCase);
      });
    } else {
      return photoList;
    }

  }
}
