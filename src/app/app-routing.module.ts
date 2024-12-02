import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JoogosComponent } from './joogos/joogos.component';  // Importe o componente 'Joogos'
import { ConsolesComponent } from './consoles/consoles.component';  // Importe o componente 'Consoles'

// Defina as rotas da aplicação
const routes: Routes = [
  { path: '', component: JoogosComponent },  // Rota inicial, direciona para 'Joogos'
  { path: 'joogos', component: JoogosComponent },  // Rota para 'Joogos'
  { path: 'consoles', component: ConsolesComponent }  // Rota para 'Consoles'
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Configura as rotas
  exports: [RouterModule]  // Exporta as rotas
})
export class AppRoutingModule { }


