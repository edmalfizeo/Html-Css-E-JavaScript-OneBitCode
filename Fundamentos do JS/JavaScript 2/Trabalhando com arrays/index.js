const array = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
console.log(array)

//adicionar elementos
// push
let tamanho = array.push("Boromir")
console.log(array)
console.log(tamanho)

// unshift
tamanho = array.unshift("teste")
console.log(array)
console.log(tamanho)

//Remover elementos
// pop
let ultimoElemento = array.pop()
console.log(array)
console.log(ultimoElemento)

// shift
ultimoElemento = array.shift()
console.log(array)
console.log(ultimoElemento)

// Pesquisar por um elemento
// include
const inclui = array.includes("Gandalf")
console.log(inclui)

// indexOf
const indice = array.indexOf("Gandalf")
console.log(indice)

// Cortar e Concatenar
// slice
const hobbit = array.slice(0, 4)
const outros = array.slice(-4)
console.log(hobbit)
console.log(outros)

// concat
const sociedade = hobbit.concat(outros, "Boromir")
console.log(sociedade)

// Substituição dos Elementos
// splice
const elementosRemovidos = sociedade.splice(indice, 1, "Gandalf o Cinzento")
console.log(sociedade)
console.log(elementosRemovidos)

// Iterar sobre os Elementos
for(let indice = 0; indice < sociedade.length; indice++){
    const elemento = sociedade[indice]
    console.log(elemento + " Se encontra na posição " + indice) 
}