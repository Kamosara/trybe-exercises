let salario = 3000;
let aliquotaINSS;
let aliquotaIR;
let salarioINSS;
let salarioIR;
let impostoIR;


console.log(salario);

if(salario < 1556.94){
    aliquotaINSS = salario * 0.08;
    salarioINSS = salario - aliquotaINSS
    console.log(aliquotaINSS, salarioINSS, salario);
}else if(salario >=1556.95 && salario < 2594.92){
    aliquotaINSS = salario * 0.09;
    salarioINSS = salario - aliquotaINSS;
    console.log(aliquotaINSS,salarioINSS, salario);
}else if(salario >=2594.93 && salario < 5189.82){
    aliquotaINSS = salario * 0.11;
    salarioINSS = salario - aliquotaINSS;
    console.log(aliquotaINSS, salarioINSS, salario);
}else if(salario > 5189.82){
    aliquotaINSS = 570.88;
    salarioINSS = salario - aliquotaINSS;
    console.log(aliquotaINSS, salarioINSS, salario);
}

if(salarioINSS <= 1903.98){
    console.log("Isento de imposto de renda.");
}else if(salarioINSS >= 1903.99 && salarioINSS <= 2826.65){
    aliquotaIR = salarioINSS * 0.075;
    impostoIR = aliquotaIR - 142.80;
    salarioIR = salarioINSS - impostoIR;
    console.log(aliquotaIR, impostoIR, salarioIR);
}else if(salarioINSS >= 2826.66 && salarioINSS <= 3751.05){
    aliquotaIR = salarioINSS * 0.15;
    impostoIR = aliquotaIR - 354.80;
    salarioIR = salarioINSS - impostoIR;
    console.log(aliquotaIR, impostoIR, salarioIR);
}else if(salarioINSS >= 3751.06 && salarioINSS <= 4664.68){
    aliquotaIR = salarioINSS * 0.225;
    impostoIR = aliquotaIR - 636.13;
    salarioIR = salarioINSS - impostoIR;
    console.log(aliquotaIR, impostoIR, salarioIR);
}else if(salarioINSS <= 4664.68){
    aliquotaIR = salarioINSS * 0.275;
    impostoIR = aliquotaIR - 869.36;
    salarioIR = salarioINSS - impostoIR;
    console.log(aliquotaIR, impostoIR, salarioIR);
}