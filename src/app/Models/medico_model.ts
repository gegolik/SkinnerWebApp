
export class medicoObject {
    id:number;
    nombre: string;
    apellido: string;
    telefono:string;
    direccion:string;
    password:string;
    id_rol:number;
    email: string;
    activo:boolean;

    constructor(nombre?: string, apellido?: string, telefono?: string, direccion?: string, id_rol?: number, email?: string,password?: string,activo?:boolean,id?:number) {
        this.nombre = nombre,
        this.apellido = apellido,
        this.telefono = telefono,
        this.direccion = direccion,
        this.password = password,
        this.id_rol = id_rol,
        this.email = email
        this.activo=activo;
        this.id=id;
    }


}