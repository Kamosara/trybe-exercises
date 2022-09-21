    /* Parte 1 */


const valor1 = 6;
const valor2 = 4;
const valor3 = 2;


if(valor1 % 2 == 0 || valor2 % 2 == 0 || valor3 % 2 == 0){
    console.log("True");
}else{
    console.log("False");
}


    /* Parte 2 */

if(valor1 % 2 == 1 || valor2 % 2 == 1 || valor3 % 2 == 1){
    console.log("True");
}else{
    console.log("False");
}    


    /* Parte 3 */
 
const valorCusto = 200.00;
const impostoSobreOCusto = valorCusto * 0.2;
const valorCustoTotal = valorCusto + impostoSobreOCusto;
const valorVenda = -300.00;
const lucro = valorVenda - valorCustoTotal;

console.log(valorCusto , impostoSobreOCusto, valorCustoTotal);
console.log(valorVenda, lucro);

if(valorCusto < 0 || valorCustoTotal < 0 || valorVenda < 0 || lucro < 0 || impostoSobreOCusto < 0){
    console.log("ERRO!!! Valores inválidos");
}