const nota = 7978;
let notaFormat;

if(nota >= 90 && nota < 100){
    notaFormat = "A";
    console.log("Nota formatada: ", notaFormat);
}else if(nota >= 80 && nota < 90){
    notaFormat = "B";
    console.log("Nota formatada: ", notaFormat);
}else if(nota >= 70 && nota < 80){
    notaFormat = "C";
    console.log("Nota formatada: ", notaFormat);
}else if(nota >= 60 && nota < 70){
    notaFormat = "D";
    console.log("Nota formatada: ", notaFormat);
}else if(nota >= 50 && nota < 60){
    notaFormat = "E";
    console.log("Nota formatada: ", notaFormat);
}else if(nota < 50){
    notaFormat = "F";
    console.log("Nota formatada: ", notaFormat);
}else if(nota < 0 || nota > 100){
    console.log("ERRO!!! Nota inválida");
}