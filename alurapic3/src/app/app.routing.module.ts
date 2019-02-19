import {NgModule} from '@angular/core';1
import {RouterModule, Routes} from '@angular/router';
import {PhotoListComponent} from './photos/photo-list/photo-list.component';
import {NotFoundComponent} from './errors/not-found/not-found.component';
import {PhotoListResolver} from './photos/photo-list/photo-list.resolver';

const routes: Routes = [
  {
    path: 'user/:userName', // Caminho da URL que o usuário digita
    component: PhotoListComponent, // Componente que sera chamado nesta URL
    resolve: { // Resolver que gera as dependencias que o componente precisa antes de carregar o mesmo.
      photosServerFromResolver: PhotoListResolver // 'photoServer' é a variavel que guarda o retorno do Resolve.
    }
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Passamos a configuração guardada no routes
  exports: [RouterModule]
})
export class AppRoutingModule {
}
