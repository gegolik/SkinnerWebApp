import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TratamientoContentComponent } from './tratamiento-content/tratamiento-content.component';
import { Routes, RouterModule } from '@angular/router';

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
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
