const array = ["Posição 0°"
    ,["Posição 1°","1° item","Ola mundo"]
    ,["Posição 2°","2° item","Salve salve"]
    ,[
         ["Posição 3°","1° array","Eu sou o goku"]
        ,["Posição 3°","2° array","Eu sou o saitama"]
    ]
]
console.log(array)
console.log(array[0])
console.log(array[1])
console.log(array[1][0])
console.log(array[2])
console.log(array[2][0])
console.log(array[3])
console.log(array[3][0])
console.log(array[3][0][2])
console.log(array[3][1])
console.log(array[3][1][2])

const matriz = [
    ["l1, c1", "l1, c2", "l1, c3", "l1, c4"],
    ["l2, c1", "l2, c2", "l2, c3", "l2, c4"],
    ["l3, c1", "l3, c2", "l3, c3", "l3, c4"],
  ]

 console.table(matriz)

 matriz.push(["l4, c1"])
 matriz[0].push("l1, c5")
 matriz[3].push("l4, c2")
 matriz[3].push("l4, c3")
 matriz[3].push("l4, c4")
 console.table(matriz)

for(let i = 0; i < matriz.length; i++) {
    for(let j = 0; j < matriz[i].length; j++) {
        const elemento = matriz[i][j]
        console.log("Posição: (" + i + ", "+ j + ") Valor: " + elemento)
    }
}