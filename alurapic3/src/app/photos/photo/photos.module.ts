import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';

import {PhotoListComponent} from '../photo-list/photo-list.component';
import {PhotoComponent} from './photo.component';
import {PhotoFormComponent} from '../photo-form/photo-form.component';
import {PhotosComponent} from '../photo-list/photos/photos.component';
import {PhotoFiltroDescricao} from '../photo-list/photo-filtro-descricao.pipe';

@NgModule({
  declarations: [
    PhotoComponent,
    PhotoListComponent,
    PhotoFormComponent,
    PhotosComponent,
    PhotoFiltroDescricao],
  imports: [
    HttpClientModule,
    CommonModule]
})
export class PhotosModule {}
