import { TratamientoContentComponent } from '../tratamiento-content/tratamiento-content.component';

export class tratamientoObject {
    codigo: number;
    tipoLesion: number;
    titulo: string;
    descripcion: string;

    constructor(codigo?: number, tipoLesion?: number, titulo?: string, descripcion?: string) {
        this.codigo = codigo,
        this.tipoLesion = tipoLesion,
        this.titulo = titulo,
        this.descripcion = descripcion
    }


}