import { RecomendacionContentComponent } from '../recomendaciones/recomendaciones.component';

export class recomendacionObject {
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