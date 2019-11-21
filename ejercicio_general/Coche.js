class Coche {
    constructor(marca, modelo, peso, tipo, potencia, precio) {
        this.marca = marca;
        this.modelo = modelo;
        this.peso = peso;
        this.tipo = tipo;
        this.potencia = potencia;
        this.precio = precio
    }

    setMarca(marca) {
        this.marca = marca;
    }
    setModelo(modelo) {
        this.modelo = modelo;
    }
    setPeso(peso) {
        this.peso = peso;
    }
    setTipo(tipo) {
        this.tipo = tipo;
    }
    setPotencia(potencia) {
        this.potencia = potencia;
    }
    setPrecio(precio) {
        this.precio = precio;
    }

    getMarca() {
        return this.marca;
    }
    getModelo() {
        return this.modelo;
    }
    getPeso() {
        return this.peso;
    }
    getTipo() {
        return this.tipo;
    }
    getPotencia() {
        return this.potencia;
    }

    getPrecio() {
        return this.precio;
    }

    getIva() {
        return parseFloat(this.precio * 1.21, 2).toFixed(2);
    }
    getCaballoKilo() {
        return parseFloat(this.potencia / this.peso).toFixed(2);

    }



};
export { Coche };