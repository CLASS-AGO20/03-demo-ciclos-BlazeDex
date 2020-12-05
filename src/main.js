export default class App {
    sumarParesFor() {
        let suma = 0;
        for(let i = 1; i <= 20; i = i + 1) {
            if(i % 2 === 0) {
                suma = suma + i;            
            }            
        }
        return suma;
    }

    contarImparesFor(inicio, fin) {
        let counter = 0;

        if(inicio > fin) {
            let c = inicio;
            inicio = fin;
            fin = c;
        }

        for(let i = inicio; i <= fin; i = i + 1) {
            if(i % 2 !== 0) {
                counter++;
            }
        }
        return counter;
    }

    sumarParesWhile() {
        let i = 1;
        let suma = 0;
        
        while(i <= 20) {
            if(i % 2 === 0) {
                suma = suma + i;
            }
            
            i = i + 1;

        }
        return suma;
    }

    contarImparesWhile(inicio, fin) {
        
        if(inicio > fin) {
            let c = inicio;
            inicio = fin;
            fin = c;
        }

        let i = inicio;
        let counter = 0;
        
        while(i <= fin) {
            if(i % 2 !== 0) {
                counter++;
            }

            i++;
        }
        return counter;
    }

    sumarParesDo() {
        let i = 1;
        let suma = 0;

        do {
            if(i % 2 === 0) {
                suma = suma + i;
            }
            
            i++;
        } while(i <= 20);
        
        return suma;
    }
    
    contarImparesDo(inicio, fin) {

        if(inicio > fin) {
            let c = inicio;
            inicio = fin;
            fin = c;
        }
        
        let i = inicio;
        let counter = 0;
        
        do {
            if(i % 2 !== 0) {
                counter++;
            }

            i++;
        } while(i <= fin);

        return counter;
    }    
}

let app = new App();

console.log(app.sumarParesFor());
console.log(app.contarImparesFor(1, 15));
console.log(app.sumarParesWhile());
console.log(app.contarImparesWhile(1, 15));
console.log(app.sumarParesDo());
console.log(app.contarImparesDo(1, 15));
