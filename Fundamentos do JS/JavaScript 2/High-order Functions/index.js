function calcular(a, b, operacao) {
    console.log("Realizando uma operação: ");
    const resultado = operacao(a, b);
    return resultado;
}

function somar(x, y) {
    console.log("\nRealizando uma soma.\n");
    return x + y;
}

console.log(calcular(3, 5, somar) + "\n");

console.log(calcular(8, 4, function (x,y) {
     console.log("Realizando uma subtração.");
     return x - y;
}))

function exibirElemento(elemento, indice, array) {
     console.log({
         elemento,
         indice,
         array
     });
};

const lista = ["Maça", "Banana", "Laranja", "Limão"];

lista.forEach(function(elemento, indice, array) {
    console.log(
        "Elemento: " + elemento + "\n" +
        "Indice: "+ indice + "\n" +
        "Array completo: " + array + "\n"
    );
});
