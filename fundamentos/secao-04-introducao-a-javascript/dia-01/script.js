/* Exercício 1 */

const myName = "Rafael";
const birthCity = "São Paulo";
let birthYear = 1997;

console.log(myName, birthCity, birthYear);

birthYear = 2030;

console.log(birthYear);

/*   Exercício 2  */

const base = 5;
const height = 8;
const area = base * height;

console.log(base, height, area);

const perimeter = 4 * height;

console.log(perimeter);

/* Exercício 3 */

const nota = 03;

if (nota >= 80) {
  console.log("Parabéns, você foi aprovada(o)!");
} else if (nota < 80 && nota >= 60) {
  console.log("Você está na nossa lista de espera");
} else if (nota < 60) {
  console.log("Você foi reprovada(o)");
}

/* Exercício 4 */

const processo = "banana";

switch (processo) {
  case "aprovada":
    console.log("Parabéns, você foi aprovada(o)!");
    break;

  case "lista":
    console.log("Você está na nossa lista de espera");
    break;

  case "reprovada":
    console.log("Você foi reprovada(o)");
    break;

  default:
    console.log("Informação incorreta");
}
