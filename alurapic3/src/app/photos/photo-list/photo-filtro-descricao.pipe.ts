import {Pipe, PipeTransform} from '@angular/core';
import {Photo} from '../photo/photo';


/** 'PhotoList' - Elemento do qual recebera e será afetado pelo filtro
 * o método 'transform' recebe a lista de fotos que será filtrada e o argumeto do filtro.
 * **/


@Pipe({name: 'filtroPorDescricao'}) // Nome do filtro para ser usado no HTML
export class PhotoFiltroDescricao implements PipeTransform {

  filtroLowCase = '';

  transform(photoList: Photo[], filtro: string) {
    this.filtroLowCase = filtro.trim().toLowerCase();

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
