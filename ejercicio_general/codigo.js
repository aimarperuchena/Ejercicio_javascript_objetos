import { Coche } from './Coche.js';



let coches = [];

let defecto = JSON.parse('{"coche": [{    "marca": "Ferrari",    "modelo": "La Ferrari",    "peso": "1000",    "tipo": "hiperdeportivo", "potencia":"1000", "precio": "1000000"},{"marca":"bmw", "modelo":"M2","peso":"1300","tipo":"deportivo","potencia":"500","precio":"60000"}]}')
for (let car in defecto.coche) {
    coches.push(new Coche(defecto.coche[car].marca, defecto.coche[car].modelo, defecto.coche[car].peso, defecto.coche[car].tipo, defecto.coche[car].potencia, defecto.coche[car].precio))

}

$(document).ready(function() {

    for (let i = 0; i < coches.length; i++) {
        console.log(coches[i].getModelo());
        document.getElementById('tabla').innerHTML = document.getElementById('tabla').innerHTML + "<tr><td>" + coches[i].getMarca() + "</td><td>" + coches[i].getModelo() + "</td><td>" + coches[i].getPeso() + "</td><td>" + coches[i].getTipo() + "</td><td>" + coches[i].getPotencia() + "</td><td>" + coches[i].getCaballoKilo() + "</td><td>" + coches[i].getPrecio() + " €</td><td>" + coches[i].getIva() + "€ </td></tr>";
    }

    $("#insertar").click(function() {
        validarFormulario();
    });

})


const validarFormulario = () => {
    let marca = document.getElementById('marca').value;
    let modelo = document.getElementById('modelo').value;
    let peso = document.getElementById('peso').value;
    let tipo = document.getElementById('tipo').value;
    let potencia = document.getElementById('potencia').value;
    let precio = document.getElementById('precio').value;

    if (marca.length > 0 && modelo.length > 0 && isNumber(peso) && tipo.length > 0 && isNumber(potencia) && isNumber(peso) && isNumber(precio)) {
        alert('marcr')
        if (marca.length === 0) {
            alert('Introduce la marca');
        }
        if (modelo.length === 0) {
            alert('Introduce el modelo');
        }
        if (tipo.length === 0) {
            alert('Introduce el tipo');
        }
        if (isNumber(peso) === false) {
            alert("El peso es un numero")
        }
        if (isNumber(potencia) === false) {
            alert("La potencia es un numero")
        }
        if (isNumber(precio) === false) {
            alert("El precio es un numero")
        }
    }

}


const isNumber = (number) => {
    return !isNaN(parseFloat(number)) && isFinite(number);
}