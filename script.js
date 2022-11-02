var square = [];
var numeros = 0;
var dentroIntervalo = 0;
var foraIntervalo = 0;

const verifiqueOintervaloDosnumeros = () => {

    while (square.length < 10) {
        numeros = prompt('Digite os números:');
        square.push(numeros);
    }    
    for (let i = 0; i < square.length; i++) {
        const element = square[i];
        if(element >= 10 && element <= 20){
            dentroIntervalo = dentroIntervalo + 1;
        }else{
            foraIntervalo = foraIntervalo + 1;
        }
    }
    return `Temos ${dentroIntervalo} dentro intervalo e ${foraIntervalo} fora do intervalo! `;
}
console.log(verifiqueOintervaloDosnumeros());
