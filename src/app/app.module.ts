import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CatalogueComponent } from './produits/catalogue/catalogue.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FormulaireComponent } from './formulaire/formulaire.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { CompteClientComponent } from './compte-client/compte-client.component';
import { NgxsModule } from '@ngxs/store';
import { PanierState } from '../shared/states/panier-state';
import { AuthGuard } from './auth.guard';

const appRoutes : Routes = [
  {path:'',component:AccueilComponent},
  {path:'formulaire',component:FormulaireComponent},
  {path:'compte-client',component:CompteClientComponent},
  {path:'produits', canActivate:[AuthGuard], loadChildren: () => import('./produits/produits.module').then(m => m.ProduitsModule)}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AccueilComponent,
    FormulaireComponent,
    CompteClientComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,
    RouterModule.forRoot (appRoutes),
    NgxsModule.forRoot ([PanierState])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
