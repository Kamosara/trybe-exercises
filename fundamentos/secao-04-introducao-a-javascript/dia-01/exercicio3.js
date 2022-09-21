const peca = "BiSPo";

switch (peca.toLowerCase()) {
  case "cavalo":
    console.log("Em L.");
    break;

  case "rei":
    console.log("Todas as direções, apenas uma casa por vez.");
    break;

  case "dama":
    console.log("Todas as direções, quantas casas quiser.");
    break;

  case "torre":
    console.log("Em linha reta, quantas casas quiser.");
    break;

  case "bispo":
    console.log("Em diagonal, quantas casas quiser.");
    break;

  case "peao":
    console.log("Uma casa para frente.");
    break;

  default:
    console.log("ERRO!!! Peça inválida.");
}
