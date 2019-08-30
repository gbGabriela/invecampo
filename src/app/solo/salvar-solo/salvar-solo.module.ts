import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SalvarSoloPage } from './salvar-solo.page';

const routes: Routes = [
  {
    path: '',
    component: SalvarSoloPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SalvarSoloPage]
})
export class SalvarSoloPageModule {}
