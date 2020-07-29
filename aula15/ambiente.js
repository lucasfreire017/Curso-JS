let num = [5, 8, 2, 6, 4, 9]

num.sort()
num.push(1)
console.log(`VETOR: ${num}`)
console.log(`O vetor tem ${num.length} posições.`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(7)
if(pos == -1){
    console.log(`Valor não encontrdo`)
}else{
    console.log(`Valor encontrado`)
}
console.log(pos)
