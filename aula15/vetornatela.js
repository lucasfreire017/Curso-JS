let valores = [8, 1, 5, 4, 2, 7]

/*
for(let pos = 0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/

valores.sort()
for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}