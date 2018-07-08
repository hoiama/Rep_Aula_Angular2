import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: './app.component.html'
})
export class AppComponent {

    fotosServer: Object[] = [];

    constructor(http: Http) {

         http.get('v1/fotos').subscribe(resposta =>{
             this.fotosServer = resposta.json();
             console.log(this.fotosServer);
         }), erro =>{console.log(erro) }
    }

}


