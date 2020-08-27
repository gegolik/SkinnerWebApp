import { Calendar } from '@fullcalendar/core';
import { Component, OnInit } from '@angular/core';
import { CalendarioService } from '../services/calendario.service';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi } from '@fullcalendar/angular';
import { INITIAL_EVENTS, createEventId } from './event-utils';
import { EventInput } from '@fullcalendar/angular';
import esLocale from '@fullcalendar/core/locales/es';



@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})



export class CalendarComponent {
  respuesta :  EventInput[]

  constructor(public calendario: CalendarioService) {
  this.calendario.getCalendario().subscribe((calendario: any)=>{this.respuesta=calendario});
  
}

  calendarVisible = true;
  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    initialView: 'timeGridWeek',
    //initialEvents: this.respuesta, // alternatively, use the `events` setting to fetch from a feed
    events:"http://localhost:8080/agenda/2",
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventsSet: this.handleEvents.bind(this),
    locale: esLocale
    /* you can update a remote database when these fire:
    eventAdd:
    eventChange:
    eventRemove:
    */
  };
  currentEvents: EventApi[] = [];

  handleCalendarToggle() {
    this.calendarVisible = !this.calendarVisible;
  }

  handleWeekendsToggle() {
    const { calendarOptions } = this;
    calendarOptions.weekends = !calendarOptions.weekends;
  }

  handleDateSelect(selectInfo: DateSelectArg) {
    const title = prompt('Por favor añada titulo al evento');
    

    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      const paciente = prompt('Por favor añada un paciente al evento: ' + title);
      if (paciente) {
        calendarApi.addEvent({
          id: createEventId(),
          title,
          start: selectInfo.startStr,
          end: selectInfo.endStr,
          allDay: selectInfo.allDay,
          description: 'Lecture'
        });
        this.calendario.addEvento(1, 2, title, selectInfo.startStr, selectInfo.endStr).subscribe((cosa: any) => { console.log(cosa) });
      }
    }
  }

  handleEventClick(clickInfo: EventClickArg) {
    if (confirm(`¿Esta seguro de querer eliminar el evento '${clickInfo.event.title}'`)) {
      clickInfo.event.remove();
      
      this.calendario.deleteEvento(parseInt(clickInfo.event.id)).subscribe();
    }
  }

  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
  }

}