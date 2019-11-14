import { Coche } from './Coche.js';

$("#insertar").click(function() {
    alert('insertar');
});

let coches = [];

let defecto = JSON.parse('{"coche": [{    "marca": "Ferrari",    "modelo": "La Ferrari",    "peso": "1000",    "tipo": "hiperdeportivo", "potencia":"1000", "precio": "1000000"},{"marca":"bmw", "modelo":"M2","peso":"1300","tipo":"deportivo","potencia":"500","precio":"60000"}]}')
for (let car in defecto.coche) {
    coches.push(new Coche(defecto.coche[car].marca, defecto.coche[car].modelo, defecto.coche[car].peso, defecto.coche[car].tipo, defecto.coche[car].potencia, defecto.coche[car].precio))
    console.log(defecto.coche[car]);
}

$(document).ready(function() {
    for (let i = 0; i < coches.length; i++) {

    }

});