export class Baraja{
    #mazo = null;
    constructor(){
        this.#mazo = [];
    }

    setMazo(cartas){
        this.#mazo = cartas;
    }

    addAlMazo(carta){
        this.#mazo.push[carta];
    }

    getMazo(){
        return this.#mazo;
    }
}