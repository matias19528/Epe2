import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { ServicioComponent } from './servicio/servicio.component';
import { PartnersComponent } from './partners/partners.component';
import { ContactoComponent } from './contacto/contacto.component';
import { JuegosComponent } from './juegos/juegos.component';

const routes: Routes = [
  { path:'home', component:HomeComponent },
  { path:'portafolio', component:PortafolioComponent },
  { path:'servicio', component:ServicioComponent },
  { path:'partners', component:PartnersComponent },
  { path:'contacto', component:ContactoComponent },
  { path:'juegos', component:JuegosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
