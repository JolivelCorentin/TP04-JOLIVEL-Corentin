import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CatalogueComponent}  from './catalogue/catalogue.component';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes : Routes = [
  {path:'catalogue', component:CatalogueComponent},
  {path:'detail-produit', component: DetailProduitComponent }
]

@NgModule({
  declarations: [CatalogueComponent, DetailProduitComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes)
  ]
})
export class ProduitsModule { }
