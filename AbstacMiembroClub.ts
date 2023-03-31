import Persona from "./interfacePersona";
export default abstract class MiembroClub implements Persona {
    nombre: string;
    apellido: string;
    fechaNacimiento:string;
    telefono: number;
    documento: number;
    miembroDesde: string;    

    constructor (nombre:string, apellido:string, fechaNacimiento:string, telefono: number, documento: number) {
this.nombre = nombre;
this.apellido = apellido;
this.fechaNacimiento = fechaNacimiento
this.telefono = telefono
this.documento = documento
this.miembroDesde = new Date ().toLocaleString();
    }
}