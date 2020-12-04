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
                counter = counter + 1;
            }
        }
        return counter;
    }
}

let app = new App();

console.log(app.sumarParesFor());
console.log(app.contarImparesFor(1, 15));
