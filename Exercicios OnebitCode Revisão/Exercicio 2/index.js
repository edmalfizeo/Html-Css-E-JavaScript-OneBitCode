let nomePessoaMaisVelha = prompt("Digite o nome da pessoa mais velha: ");
let idadePessoaMaisVelha = prompt("Digite a idade da pessoa mais velha: ");
let nome = prompt("Digite o nome da pessoa mais nova: ");
let idade = prompt("Digite a idade da pessoa mais nova: ");
let diferencaIdade = idadePessoaMaisVelha - idade;
alert(
  "Pessoa mais velha:\nNome: " +
    nomePessoaMaisVelha +
    "\n" +
    "Idade: " +
    idadePessoaMaisVelha +
    "\n" +
    "\n" +
    "Pessoa mais nova: " +
    "\n" +
    "Nome: " +
    nome +
    "\n" +
    "Idade: " +
    idade +
    "\n" +
    "\n" +
    "Diferença de Idade: " +
    diferencaIdade +
    " Anos."
);
