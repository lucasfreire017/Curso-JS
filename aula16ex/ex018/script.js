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
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
}

function final(){
    res.innerHTML = `<p>Ao todo temos ${valores.length} númeoros cadastrados.</p>`
}