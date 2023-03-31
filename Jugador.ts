export enum Deporte {
    futbol, basket, zumba, voley, natacion, gym
}
import MiembroClub from "./AbstacMiembroClub";
export class Jugador extends MiembroClub {
deporte: string;

constructor (nombre: string, apellido: string, fechaNacimiento:string, documento: number, telefono:number,
    deporte:string ){

    super (nombre, apellido, fechaNacimiento, documento, telefono)

    this.deporte = deporte;


}

}
