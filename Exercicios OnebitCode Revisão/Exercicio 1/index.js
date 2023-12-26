alert("Bem vindos! A seguir pediremos alguns dados. ");
let nome = prompt("Digite seu nome: ");
let idade = prompt("Digite sua idade: ");
let confirmacao = prompt("Voce confirma sua idade: ");
if (confirmacao === "sim" || confirmacao === "Sim") {
  confirmacao = true;
} else {
  confirmacao = false;
}

alert(
  "Nome: " +
    nome +
    "\n" +
    "Idade: " +
    idade +
    "\n" +
    "Confirmou a idade: " +
    confirmacao
);
