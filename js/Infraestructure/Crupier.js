export class Crupier{
    shuffle(mazo){
        
    }
    fill(){
        var mazo = [];
        for(var i =1;i<13;i++){
            mazo.push(i);
        }
        return mazo;
    }
    getOut(mazo){
        var carta = mazo.pop();
        return carta;
    }
}