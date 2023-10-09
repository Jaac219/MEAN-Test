import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MinerComponent } from './components/miner/miner.component';
import { CreateMinerComponent } from './components/create-miner/create-miner.component';
import { EditMinerComponent } from './components/edit-miner/edit-miner.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'miners', component: MinerComponent},
  {path: 'create-miner', component: CreateMinerComponent},
  {path: 'edit-miner/:id', component: EditMinerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
