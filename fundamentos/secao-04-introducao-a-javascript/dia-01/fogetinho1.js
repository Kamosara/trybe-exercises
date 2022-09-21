const valor1 = 65;
const valor2 = 57;
const valor3 = 58;
const soma = valor1 + valor2 + valor3;

if(soma == 180){
    console.log("True");
}else if(soma > 180){
    if(valor1 < 0){
        console.log("ERRO - VALORES INVÁLIDOS!!!");
    }else if(valor2 < 0){
        console.log("ERRO - VALORES INVÁLIDOS!!!");
    }else if(valor3 < 0){
        console.log("ERRO - VALORES INVÁLIDOS!!!");
    }else{
        console.log("False");
    }
}else if(soma < 180){
    if(valor1 < 0){
        console.log("ERRO - VALORES INVÁLIDOS!!!");
    }else if(valor2 < 0){
        console.log("ERRO - VALORES INVÁLIDOS!!!");
    }else if(valor3 < 0){
        console.log("ERRO - VALORES INVÁLIDOS!!!");
    }else{
        console.log("False");
    }
}else{
    if(valor1 < 0){
        console.log("ERRO - VALORES INVÁLIDOS!!!");
    }else if(valor2 < 0){
        console.log("ERRO - VALORES INVÁLIDOS!!!");
    }else if(valor3 < 0){
        console.log("ERRO - VALORES INVÁLIDOS!!!");
    }
}


