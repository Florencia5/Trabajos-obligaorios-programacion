const fs = require('fs'); 
const readlineSync = require('readline-sync') 

import { Deporte, Jugador} from "./Jugador";

export default class GestorClub {
    constructor() {
        fs.writeFileSync('./socios.json', '[]')
    }

    read() { return fs.readlineSync('./socios.json')}; 
    data() {return JSON.parse(fs.readFileSync('./socios.json'))}; 
    agregarSocio(){
        let nombre = readlineSync.question('Escriba Nombre del Socio: ');
        let apellido = readlineSync.question('Escriba Apellido del Socio: ');
        let fechaNacimiento = readlineSync.question('Escriba fecha de Nacimiento formato DD/MM/YYYY: ');
        let documento = readlineSync.question('Escriba Documento del Socio: ');
        let telefono = readlineSync.question('Escriba telefono del Socio: ');

        let ArrayDeporte = ['futbol', 'basket', 'zumba', 'voley', 'natacion', 'gym'];
        let deporte = readlineSync.keyInSelect(ArrayDeporte, 'Elige Deporte del Listado.');
        let newSocio = new Jugador(nombre, apellido, fechaNacimiento, documento, telefono, deporte);

        let socios = [...this.data(), newSocio] 
        fs.writeFileSync('./socios.json', JSON.stringify(socios, null, 2));
    }

    buscarSocioXNombre() {
        let nombre: string  = readlineSync.question('Escriba Nombre del Socio que desea buscar: ');
        const nombreEncontrado: string = this.data().find((socio: {nombre: string}) => socio.nombre === nombre);
        console.log(`El nombre '${nombre}' se encuentra en la base de datos.`);
        return nombreEncontrado;
    }

    buscarSocioXApellido() {
        let apellido: string  = readlineSync.question('Escriba el apellido del Socio que desea buscar: ');
        const apellidoEncontrado: string = this.data().find((socio: {apellido: string}) => socio.apellido === apellido);
        console.log(`El apellido '${apellido}' se encuentra en la base de datos.`);
        return apellidoEncontrado;
    }

    buscarSocioXDni() {
        let documento: number  = readlineSync.question('Escriba el DNI del Socio que desea buscar: ');
        const dniEncontrado: number = this.data().find((dni: {documento: number}) => dni.documento === documento);
        console.log(`El DNI '${documento}' se encuentra en la base de datos.`);
        return dniEncontrado;
    }

    buscarSocioXFechaNacimiento() {
        let fecha: string  = readlineSync.question('Escriba la fecha de nacimiento del Socio que desea buscar. Formato DD/MM/YYYY: ');
        const fechaEncontrada: string = this.data().find((fechaNac: {fechaNacimiento: string}) => fechaNac.fechaNacimiento === fecha);
        console.log(`La fecha '${fecha}' se encuentra en la base de datos.`);
        return fechaEncontrada;
    }
}