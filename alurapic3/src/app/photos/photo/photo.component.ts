import {Component, Input} from '@angular/core';

/**
 * selector - é como o elemento se apresenta para ser usado o HTML deste, exemplo <ap-photo> representa
 * o componente html "photo.componente.html".
 *
 * templateUrl - é o path do HTML deste componente.
 *
 * @Input() - diz que sáo elementos que recebem valores externos, que podem ser setados por outros elementos externo.
 **/

@Component({
  selector: 'ap-photo',
  templateUrl: 'photo.component.html'
})
export class PhotoComponent {
 @Input() titleParam = '';
 @Input()  srcParam = '';
 @Input() altParam = '';
 @Input() classParam = '';
}
