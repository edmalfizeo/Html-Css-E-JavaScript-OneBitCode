function dividir(num){
    console.log(num);
    if (num % 2 == 0) {
        dividir(num / 2)
    } else {
        return num;
    }
}

//dividir(256);

function dobrar(num) {
    console.log(num);
    dobrar(num * 2);
}

//dobrar(2);


// Fatorial de 5: !5 === 5 * 4 * 3 * 2 * 1
function fatorial(num) {
    console.log("Numero: " + num);
    if (num === 0) {
        return 1
    } else if (num === 1) {
        return 1
    } else {
        console.log(num + " * !" + (num - 1));
        return num * fatorial(num - 1);
    }
}

console.log(fatorial(4));


