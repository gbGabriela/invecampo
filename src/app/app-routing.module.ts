import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'salvar-plantio', loadChildren: './plantio/salvar-plantio/salvar-plantio.module#SalvarPlantioPageModule' },
  { path: 'pagina', loadChildren: './pagina/pagina.module#PaginaPageModule' },
  { path: 'listar-plantio', loadChildren: './plantio/listar-plantio/listar-plantio.module#ListarPlantioPageModule' },
  { path: 'salvar-solo', loadChildren: './solo/salvar-solo/salvar-solo.module#SalvarSoloPageModule' },
  { path: 'listar-solo', loadChildren: './solo/listar-solo/listar-solo.module#ListarSoloPageModule' },
  { path: 'filtro-plantio', loadChildren: './filtro/filtro-plantio/filtro-plantio.module#FiltroPlantioPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
