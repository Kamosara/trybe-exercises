    /* EXERCÍCIOS DE FUNÇÕES */

const a = 435;
const b = 34;

function sum (x, y){
    soma = x + y;
    return soma;
}

function sub (x, y){
    subtracao = x - y;
    return subtracao;
}

function mult (x, y){
    multiplicacao = x * y;
    return multiplicacao;
}

function div (x, y){
    divisao = x / y;
    return divisao;
}

function mod (x, y){
    modulo = x % y;
    return modulo;
}


console.log(sum(a,b));
console.log(sub(a,b));
console.log(mult(a,b));
console.log(div(a,b));
console.log(mod(a,b));

console.log('--------------------------------------------------------');

function maiorOuMenor (x, y){
    if (x > y){
        return console.log(x, ' é maior que ', y);
    }else if(x < y){
        return console.log(y, 'é maior que ', x);
    }else {
        return console.log('Números iguais!');
    }
}
 maiorOuMenor(a,b);

 