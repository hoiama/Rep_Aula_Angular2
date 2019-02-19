import {Component, OnDestroy, OnInit} from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
/**
 * Podemos subistituir também assim 'this.activatedRout.snapshot.data.['photosServerFromResolver']'
 * 'Subject' é um escutador que emite para todos que estiverem inscritos nele.
 * 'debounceTime' é um pipe (filtro' de tempo em milisegundos que o subject pode receber antes de recuperar o valor de inscrito
 * 'ngOnDestroy' é chamado quando saimos par aoutra rota do sistema.
 * 'filaFiltroSubject.unsubscribe()' é para desinscrever quando formos para outra rota
 * 'this.filaFiltroSubject.complete()' finaliza o espaço da memória que guarda os dados imputados
 */
export class PhotoListComponent implements OnInit, OnDestroy {
  photosServer: any = [];
  filaFiltroSubject: Subject<string> = new Subject<string>();
  filtro = '';
  hasMore = false;

  constructor(private activatedRout: ActivatedRoute) {}

  ngOnInit(): void {
    this.photosServer = this.activatedRout.snapshot.data.photosServerFromResolver;
    this.filaFiltroSubject
      .pipe(debounceTime(300))
      .subscribe(filterOfSubject => {
        this.filtro = filterOfSubject;
      });
  }

  ngOnDestroy(): void {
    this.filaFiltroSubject.unsubscribe();
    this.filaFiltroSubject.complete();
  }
}
