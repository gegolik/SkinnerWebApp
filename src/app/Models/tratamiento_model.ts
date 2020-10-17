import { TratamientoContentComponent } from '../tratamiento-content/tratamiento-content.component';

export class tratamientoObject {
    codigo: number;
    tipoLesion: number;
    id_tipo: number;
    titulo: string;
    descripcion: string;

    constructor(codigo?: number, tipoLesion?: number, id_tipo?: number, titulo?: string, descripcion?: string) {
        this.codigo = codigo,
        this.tipoLesion = tipoLesion,
        this.id_tipo = id_tipo,
        this.titulo = titulo,
        this.descripcion = descripcion
    }


}