let nome = prompt("Digite seu nome: ");

let pergunta = prompt("Você ja viajou para alguma cidade? \nsim ou não");
let listaCidades = "",
  cidade,
  contagem = 0;

if (pergunta == "sim") {
  while (pergunta != "não") {
    cidade = prompt("Qual o nome da cidade?");
    listaCidades += "\n" + cidade;
    contagem++;
    pergunta = prompt("Você ja viajou para alguma cidade? \nsim\nou\nnão");
  }
}

alert(
  "Nome do turista: " +
    nome +
    "\n" +
    "Numero de cidades visitadas: " +
    contagem +
    "\n" +
    "Cidades visitadas: " +
    listaCidades
);
