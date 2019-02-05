import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Photo} from '../../photo/photo';

@Component({
  selector: 'ap-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnChanges {

  @Input() photos: Photo[] = [];
           arrayLinhas: any [] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.photos) {
      this.arrayLinhas = this.contaLinhas(this.photos);
    }
  }

  contaLinhas (photos: Photo[]) {
    const novaLinha = [];
    for (let index = 0; index < photos.length; index += 3) {
      novaLinha.push(photos.slice(index, index + 3));
    }
    return novaLinha;
  }

}
