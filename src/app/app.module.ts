import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JoogosComponent } from './joogos/joogos.component';  // Importe o componente 'Joogos'
import { ConsolesComponent } from './consoles/consoles.component';  // Importe o componente 'Consoles'

const routes: Routes = [
  { path: 'jogos', component: JoogosComponent },  // Rota para o componente 'Joogos'
  { path: 'consoles', component: ConsolesComponent },  // Rota para o componente 'Consoles'
  { path: '', redirectTo: '/jogos', pathMatch: 'full' }  // Rota padrão
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Configuração das rotas
  exports: [RouterModule]
})
export class AppRoutingModule { }
