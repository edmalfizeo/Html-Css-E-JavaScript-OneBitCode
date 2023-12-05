function calcularMedia(a, b) {
    const media = (a + b) / 2;
    return media;
}

const resultado = calcularMedia(7, 2);

console.log(resultado + "\n");

function criarProduto(nome, preco) {
    const produto = {
        nome,
        preco,
        estoque: 1
    }
    return produto;
}

const notebook = criarProduto("Notebook Intel core I9 16gb",4500);
console.log(notebook);
let notebookLength = Object.keys(notebook).length;
console.log("\nNumero de atributos do notebook: " + notebookLength);

function areaRetangular(base, altura) {
    return base * altura;
}

console.log("\n" + areaRetangular(3, 5));

function areaQuadrada(lado) {
    return areaRetangular(lado, lado);
}

console.log("\n" + areaQuadrada(9));

function ola() {
    let texto = "Olá";
    return texto;
    texto = "Tudo bem?";
    console.log(texto);
}

console.log("\n" + ola());

function maioridade(idade) {
    if(idade >= 18) {
        return "Maior de idade."
    }else {
        return "Menor de idade."
    }
}

console.log("\n" +  maioridade(23));
console.log(maioridade(13));
