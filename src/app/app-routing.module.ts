import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NextstepsComponent } from './body/nextsteps/nextsteps.component';
import { ListadoclientesComponent } from './body/listadoclientes/listadoclientes.component';
import { ListadosucursalesComponent } from './body/listadosucursales/listadosucursales.component';
import { SucursalesComponent } from './abm/sucursales/sucursales.component';
import { VentassucursalesComponent } from './ventassucursales/ventassucursales.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  { path: '', component: NextstepsComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'clientes', component: ListadoclientesComponent },
  { path: 'ventassucursales', component: VentassucursalesComponent },
  { path: 'sucursales', component: ListadosucursalesComponent },
  { path: 'abm-sucursales', component: SucursalesComponent },
  { path: '**', component: NextstepsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
