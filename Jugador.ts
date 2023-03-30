
export enum Deporte {
    futbol, basket, voley, natacion,};

import MiembroClub from "./AbstractMiembroClub";

export class Jugador extends MiembroClub {
    deporte: Deporte;

    constructor(nombre: string, apellido: string, fechaNacimiento: string, documento: number, telefono: number, deporte: Deporte) {
        super(nombre, apellido, fechaNacimiento, documento, telefono);

        this.deporte = deporte;
    }
}
