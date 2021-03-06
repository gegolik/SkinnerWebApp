import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

//COMPONENTES
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {CookieService} from 'ngx-cookie-service';
import { ChartsModule } from 'ng2-charts';

import { TratamientoContentComponent } from './tratamiento-content/tratamiento-content.component';
import { CalendarComponent } from './calendar/calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular'; 
import interactionPlugin from '@fullcalendar/interaction'; 
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';



//SERVICIOS
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

//OTROS
import { Routes, RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListadoLesionesComponent } from './listado-lesiones/listado-lesiones.component';
import { HistorialLesionesComponent } from './historial-lesiones/historial-lesiones.component';
import { AdministracionmedicosComponent } from './administracionmedicos/administracionmedicos.component';
import { RecomendacionContentComponent } from './recomendaciones/recomendaciones.component';
import { AsignacionComponent } from './asignacion/asignacion.component';
import { PerfilComponent } from './perfil/perfil.component';
import { NotificacionComponent } from './notificacion/notificacion.component';
//MODELS
//import { tratamientoObject } from './Models/tratamiento_model';

//Rutas de la web
const rutas: Routes = [
  //{ path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent}
  ,{ path: '', component: ContentComponent }
  ,{ path: 'tratamientos', component:TratamientoContentComponent}
  ,{ path: 'calendar', component:CalendarComponent}
  ,{ path: 'listado-lesiones/:id', component:ListadoLesionesComponent}
  ,{ path: 'historial-lesiones/:id', component:HistorialLesionesComponent}
  ,{ path: 'login', component: LoginComponent}
  ,{ path: 'medicos', component: AdministracionmedicosComponent}
  ,{ path: 'recomendaciones', component: RecomendacionContentComponent}
  ,{ path: 'asignaciones', component: AsignacionComponent}
  ,{ path: 'perfil', component: PerfilComponent}
  ,{ path: 'notificaciones', component: NotificacionComponent}

  //,{ path: 'pacientes', component:PacientesContentComponent}
  //,{ path: 'miperfil', component:PerfilContentComponent}
  //,{ path: 'configuracion', component:ConfiguracionContentComponent}
];

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  timeGridPlugin,
  listPlugin,
   interactionPlugin
])

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentComponent,
    TratamientoContentComponent,
    CalendarComponent,
    ListadoLesionesComponent,
    HistorialLesionesComponent,
    HomeComponent,
    LoginComponent,
    AdministracionmedicosComponent,
    RecomendacionContentComponent,
    AsignacionComponent,
    PerfilComponent,
    NotificacionComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(rutas),
    FormsModule,
    ChartsModule,
    FullCalendarModule 
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}

