import { Injectable } from '@angular/core';
import { tratamientoObject } from '../Models/tratamiento_model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TratamientoService {
  private tratamientos: tratamientoObject[] = [
    /*  new tratamientoObject(456, 1, 'hola', 'Hoy voy a detallar cómo hacer flan casero. Se vienen muchos eventos y tener un postre salvador, rápido y rico para llevar a todos lados es mi ideal. Lo que nunca se me había ocurrido es que ese postre sería el flan de huevo. No sé porque para mí el flan era un postre complicadísimo. ¡Pero me llevó menos que preparar una café! Cuando caí en la cuenta entendí porque las madres de antes hacían flan siempre, lleva muy poco proceso y casi no tiene fallos.',),
    new tratamientoObject(123, 1, 'como', 'Tenía catalogado al flan casero como un postre pesado, pero al ver que los ingredientes son solo leche, huevos y un poco de azúcar, me pareció hasta liviano. Además es super sano y nutritivo para que coman los chicos. Creo que la pesadez se la da que al flan le ponemos mucho dulce de leche y crema. Pero comerlo solo es rico y bastante sano.',),
    new tratamientoObject(789, 1, 'estas', 's naturalmente sin gluten y lleva menos tiempo que el de cajita. El de cajita se hace en olla revolviendo sin parar porque si no se te pega en el fondo y eso te exige estar mínimo 20 minutos revolviendo. ¡Este no! Mezclás todo, ponés en el molde y lo dejás cocinando.',),
    new tratamientoObject(147, 1, 'vos', 'Se me ocurrió hacer una versión liviana, con leche descremada o leche vegetal y endulzante. Si le ponés una cucharadita de cacao amargo queda de chocolate. O también es común agregarle coco y mi tía que es una osada de la cocina lo ha hecho con galletitas y hasta con mantecol ¡Las opciones son infinitas! También hay una versión con leche condensada y otros que le ponen dulce de leche en la preparación.',),
    
    new tratamientoObject(258, 1, 'tanto tiempo', 'Si bien es un postre que se dejó de usar, últimamente lo veo cada vez más seguido en las cartas. Es que para mí el flan y el budín de pan deberían estar en todos los restaurantes.El flan no tiene secretos, sólo un par de recaudos para que salga lisito, que es como los fundamentalistas del flan dicen que es. No hay que batir la preparación y el agua del baño maría no tiene que hervir a borbotones. Pero como a mucha gente le encanta el flan con agujeritos, no te hagas mucho problema. Si sale lisito decís que lo hiciste tradicional y si sale con agujeritos decís que es al gusto de los comensales ¡y todos contentos!',)
  
  */
  ];

  constructor(private http: HttpClient) {}

  getTratamientos() {
    return this.http.get('http://localhost:8080/tratamientos');
  }

  addTratamiento(trat: tratamientoObject) {
    let data = {
      tipoLesion: trat.tipoLesion,
      titulo: trat.titulo,
      descripcion: trat.descripcion,
    };
    return this.http.post('http://localhost:8080/tratamientos', data);
  }

  deleteTratamiento(id: number) {
    return this.http.delete('http://localhost:8080/tratamientos/' + id);
  }

  nuevoTratamiento(): tratamientoObject {
    return {
      codigo: this.tratamientos.length,
      tipoLesion: 1,
      titulo: '',
      descripcion: '',
    };
  }
}
