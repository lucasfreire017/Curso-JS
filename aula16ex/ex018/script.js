let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

// Verifica se o número está entre 1 e 100
function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

// Não ter repetição de valores na lista
function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        console.log(l.indexOf(Number(n)))
        return true
    } else {
        return false
    }
}
// Adcionar os valores 
function adcionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
       let item = document.createElement('option')
       valores.push(num.value)
       item.text = `Valor ${num.value} adicionado`
       lista.appendChild(item)
       num.value = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
}

function final(){
    //Variável com maior valor digitado
    let maior = Math.max.apply(null, valores)

    //Variável com menor valor digitado
    let menor = Math.min.apply(null, valores)

    //Soma de todos os númeors
    let soma = 0
    for(let c = 0; c < valores.length; c++){
        soma += parseInt(valores[c])
    }
    
    //Calculo de média
    let total = 0
    for(let c = 0; c< valores.length; c++){
        total += parseInt(valores[c])
    }
    let media = (total/valores.length)

    res.innerHTML = `<p>Ao todo temos ${valores.length} números cadastrados.</p>`
    res.innerHTML += `<p>O maior valor digitado foi ${maior}`
    res.innerHTML += `<p>O menor valor digitado foi ${menor}`
    res.innerHTML += `<p>A soma de todos os valores é ${soma}`
    res.innerHTML += `<p>A média dos valores digitados é ${media}`
}

