const prompt = require("prompt-sync")();
const Sandglass = require("./sandglass");
const isOnlyNumbers = require("./utils");

console.log("Olá, Seja Bem Vindo!");
console.log("Para iniciar o desenho, digite um número maior ou igual a 20.");
let answer = prompt("");
if (isOnlyNumbers(answer)) {
  if (parseInt(answer) >= 20) {
    const dimension = Math.floor(answer / 2);
    const sandglass = new Sandglass(dimension);
    console.log("\nEstado inicial da Ampulheta:");
    sandglass.drawInicialState();
    console.log("\nEstado da ampulheta ao finalizar o tempo.");
    sandglass.drawFinalState();
  } else {
    console.log(" ***O número precisa ser maior ou igual a 20.***");
    process.exit(0);
  }
} else {
  console.log("\n***Número informado inválido, inicie o programa novamente***");
  process.exit(0);
}
