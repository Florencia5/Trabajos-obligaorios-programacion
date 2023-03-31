const fs = require("fs")
const readlineSync = require("readline-sync")


import {Deporte, Jugador} from "./Jugador"
export default class GestorClub {
constructor (){
fs.writeFilesync("./socios.json", "[]")
}

data() {return JSON.parse(fs.readFileSync("./socios.json"))}

agregarSocio(){
    var nombre = readlineSync.question("Escriba el nombre del socio: ");
    var apellido = readlineSync.question("Escriba el apellido del socio: ");
    var fechaNacimiento = readlineSync.question("Escriba fecha de nacimiento del socio en formato YYY/MM/DD: ");
    var documento = readlineSync.question("Escriba documento del socio: ");
    var telefono = readlineSync.question("Escriba telefono del socio: ");
       
var arrayDeporte = ["futbol", "basket", "zumba", "voley", "natacion", "gym"];

var deporte = readlineSync.keyInSelect (deporte, "Seleccione deporte del socio");

let nuevoSocio = new Jugador(nombre, apellido, fechaNacimiento, documento, telefono, deporte);

//agrego los socios existentes y ademas agrego el nuevo//
let socios = [this.data(), nuevoSocio]
//escribo en mi archivo json todos loa socios//
fs.writeFilesync("./socios.json", JSON.stringify(socios, null, 2));

}
}