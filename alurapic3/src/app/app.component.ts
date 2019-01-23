import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  photos =
    [
      {
        titleParam : 'titulo',
        srcParam : 'http://www.chumbogordo.com.br/wp-content/uploads/2018/11/leao.jpg',
        altParam : 'testando alt da imagem',
        classParam : 'img-thumbmail'
      },
      {
        titleParam : 'titulo',
        srcParam : 'http://www.chumbogordo.com.br/wp-content/uploads/2018/11/leao.jpg',
        altParam : 'testando alt da imagem',
        classParam : 'img-thumbmail'
      }
    ];

  constructor(http:HttpClient){
    console.log(http);
  }

}
