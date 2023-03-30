import Persona from "./interfacePersona";

abstract class MiembroClub implements Persona {
    nombre: string;
    apelllido: string;
    fechaNacimiento: string;
    documento: number;
    telefono: number;
    miembroDesde: string;

constructor(nombre: string, apellido: string, fechaNacimiento: string, documento: number, 
telefono: number){
this.nombre = nombre;
this.apelllido = apellido;
this.fechaNacimiento = fechaNacimiento;
this.documento = documento;
this.telefono = telefono;
this.miembroDesde = new Date().toLocaleDateString();

}
}

