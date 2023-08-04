/* Escreva uma função que receba um número e retorne o seguinte: 
Número é divisivel por 3 = Fizz
Número é divisivel por 5 = Buzz
Número é divisivel por 3 e 5 = FizzBuzz
Número não é divisivel por 3 e 5 = Retorna o proprio numero
Checar se o numero é realmente um numero = retorna o proprio numero
use a função com numero de 0 a 100*/
const fizzBuzz = (i) => {
    if (i % 5 != 0 && i % 3 != 0) {
        console.log(i);
    } else if (i % 5 == 0 && i % 3 != 0) {
        console.log("Buzz");
    } else if  (i % 3 == 0 && i % 5 != 0) {
        console.log("Fizz");
    }   else if (i % 5 == 0 || i % 3 == 0) {
        console.log("FizzBuzz") ;
    }
}

const eNum = (num) => {
    if (num !== Number)
     console.log('Erro') 
    else
     console.log(fizzBuzz())
}

const geraNum = () => { return Math.floor(num1 = Math.random() * 100);
}

fizzBuzz(geraNum())
console.log("Obrigado por executar ! ");