/* function verificaPalindrome(name){
    let split = name.split("");
    let rev = split.reverse();
    let pal = rev.join("")
    if(pal == name){
        return true;
    }else{
        return false;
    }
}

console.log(verificaPalindrome('couve')); */

console.log('------------------------------------------------------------');

/* A = [2, 3, 6, 7, 10, 1];
console.log(A);

function verifica(n){

    for(let key in n){
        //console.log(n[key]);
        if(n[key] > 9){
            return key;
        }
    }
}

console.log(verifica(A));


let B = [2, 4, 6, 7, 10, 0, -3];

console.log(B);

function vamvam(x){
    for(let key in x){
        if(x[key] < 0){
            return key;
        }
    }
}

console.log(vamvam(B)); */

console.log('------------------------------------------------------------');


/* let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function maiorNome(culhambo){
let nomesInv = [...culhambo];
let copia = nomesInv.reverse();


    console.log(culhambo);
 for (let i = 0; i < culhambo.length; i += 1){
    if(culhambo[i].length > copia[i].length){
        return culhambo[i];
    }
 }
}
console.log(maiorNome(nomes)); */


console.log('------------------------------------------------------------');


/* let num = [2, 3, 2, 5, 8, 2, 3];

function numRep(n){
    let contador2 = 0;
    let contador8 = 0;
    let contador3 = 0;
    for(i = 0; i < n.length; i += 1){
        if(n[i] == 2){
            contador2 += 1;
        }else if(n[i] == 3){
            contador3 += 1;
        }else if(n[i] == 8){
            contador8 += 1;
        }
    }

    if(contador2 > contador3 && contador2 > contador8){
        return 2;
    }else if(contador3 > contador2 && contador3 > contador8){
        return 3;
    }else if(contador8 > contador3 && contador8 > contador2){
        return 8;
    }

    
}

console.log(numRep(num)); */

console.log('------------------------------------------------------------');

let n = 5;

function somatorio(num){
    let sum = 0;
    for(i=0; i <= num; i +=1){
        sum += i;
    }

    return sum;
}

console.log(somatorio(n));