import {Component, OnDestroy, OnInit} from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit, OnDestroy {
  photosServer: any = [];
  filtro = '';
  filaFiltro: Subject<string> = new Subject<string>();

  constructor(
    private activatedRout: ActivatedRoute) {}

  ngOnInit(): void {
    this.photosServer = this.activatedRout.snapshot.data.photosServer;
    this.filaFiltro
      .pipe(debounceTime(300))
      .subscribe(filter => {
      this.filtro = filter;
    });
  }

  ngOnDestroy(): void {
    this.filaFiltro.unsubscribe();
    this.filaFiltro.complete();
  }
}
