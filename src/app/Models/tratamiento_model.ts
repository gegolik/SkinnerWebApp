export class tratamientoObject{
    codigo: number;
    tipoLesion: number;
    titulo: string;
    descripcion: string
 
    //GET Y SET   
    public getCodigo() {
        return this.codigo        
    }
    public getTipoLesion() {
        return this.tipoLesion        
    }
    public getTitulo() {
        return this.titulo        
    }
    public getDescripcion() {
        return this.descripcion        
    }
    public setTipoLesion(value: number) {
        this.tipoLesion = value
    }
    public setTitulo(value: string) {
        this.titulo = value
    }
    public setDescripciojn(value: string) {
        this.descripcion = value
    }
}