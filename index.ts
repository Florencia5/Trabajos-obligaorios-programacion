import GestorClub from "./GestorClub";

const fs = require("fs")
console.log(fs.readFileSync("./socios.json"), "read");
console.log(JSON.parse(fs.readFileSync("./socios.json")), "parse-read");
console.log(JSON.stringify("./socios.json, null, 2"),"stringify");

