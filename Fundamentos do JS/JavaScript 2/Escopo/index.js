let pokemon = "Charmander";
function evoluir() {
    pokemon = "Charmeleon";
}

console.log(pokemon);
evoluir();
console.log("\n" + pokemon);

function criarAnimal() {
    let animal = "Gato";
}

// O animal não consegue ser chamado pois foi criado dentro do escopo usando let
criarAnimal();
//console.log(animal);

// Situação não consegue ser chamada pois foi criada usando let dentro do escopo
function avaliarNota(nota) {
    if(nota > 60) {
        var aprovado = true;
        //let situacao = "aprovado";
    }else {
        var aprovado = false;
        //let situacao = "Reprovado";
    }
    console.log("\n" + nota);
    console.log(aprovado);
    //console.log(situacao);
}

avaliarNota(83);
avaliarNota(49);

// Não podera ser chamada no começo pois ainda não foi atribuida.
// console.log(nome);
// console.log(sobrenome);

var nome = "Eduardo";
let sobrenome = "Oliveira";

console.log(nome);
console.log(sobrenome);


