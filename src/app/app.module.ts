import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

//COMPONENTES
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { TratamientoContentComponent } from './tratamiento-content/tratamiento-content.component';
import { CalendarComponent } from './calendar/calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular'; 
import dayGridPlugin from '@fullcalendar/daygrid'; 
import interactionPlugin from '@fullcalendar/interaction'; 

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
  ,{ path: 'calendar', component:CalendarComponent}
  //,{ path: 'pacientes', component:PacientesContentComponent}
  //,{ path: 'miperfil', component:PerfilContentComponent}
  //,{ path: 'configuracion', component:ConfiguracionContentComponent}
];

FullCalendarModule.registerPlugins([ 
  dayGridPlugin,
  interactionPlugin])

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    ContentComponent,
    TratamientoContentComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(rutas),
    FormsModule,
    FullCalendarModule 
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}

