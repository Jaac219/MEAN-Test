import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MinerComponent } from './components/miner/miner.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'miners', component: MinerComponent},
  {path: 'create-miner', component: MinerComponent},
  {path: 'edit-miner/:id', component: MinerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
