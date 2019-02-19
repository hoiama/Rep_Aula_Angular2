import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';

import {PhotoListComponent} from '../photo-list/photo-list.component';
import {PhotoComponent} from './photo.component';
import {PhotoFormComponent} from '../photo-form/photo-form.component';
import {PhotosComponent} from '../photo-list/photos/photos.component';
import {PhotoFiltroDescricao} from '../photo-list/photo-filtro-descricao.pipe';
import { LoadButtonComponent } from '../photo-list/load-button/load-button.component';

/** Declarations - Aqui temos a declaração de componentes neste módulo, quem importar este módulo rerá acesso a estes
 * componentes declarados, e os componetes também podem ser acessados entre sí
 *
 * import - aqui importamos e usamos modulos com todos os seus componentes.
 **/

@NgModule({
  declarations: [
    PhotoComponent,
    PhotoListComponent,
    PhotoFormComponent,
    PhotosComponent,
    PhotoFiltroDescricao,
    LoadButtonComponent],
  imports: [
    HttpClientModule,
    CommonModule]
})
export class PhotosModule {}
