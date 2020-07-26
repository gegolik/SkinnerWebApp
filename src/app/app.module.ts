import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

//COMPONENTES
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { TratamientoContentComponent } from './tratamiento-content/tratamiento-content.component';
//SERVICIOS
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

//OTROS
import { Routes, RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';


//MODELS
//import { tratamientoObject } from './Models/tratamiento_model';

//Rutas de la web
const rutas: Routes = [
  { path: '', component: ContentComponent }
  ,{ path: 'tratamientos', component:TratamientoContentComponent}
  //,{ path: 'pacientes', component:PacientesContentComponent}
  //,{ path: 'miperfil', component:PerfilContentComponent}
  //,{ path: 'configuracion', component:ConfiguracionContentComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    ContentComponent,
    TratamientoContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(rutas),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}

