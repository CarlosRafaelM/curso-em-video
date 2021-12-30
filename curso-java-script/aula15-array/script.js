let num = [1, 23, 7, 5, 45]

num.push(2)
//organiza ordem crescente considerando primeira casa do conteudo
num.sort()


console.log(num)
console.log('')

console.log(`O Vetor tem ${num.length} posições`)
console.log('')

for(let pos = 0; pos < num.length; pos ++)
    console.log(`Na posição ${pos} tem o valor ${num[pos]}`)

console.log('')

for(let pos in num) {
    console.log(`Na posição ${pos} tem o valor ${num[pos]}`)
}

console.log('')

console.log(num.indexOf(23))
console.log(num.indexOf(77))