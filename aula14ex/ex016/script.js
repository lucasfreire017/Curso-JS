function count(){
    var init = document.querySelector('input#i_num').value
    var fim = document.querySelector('input#f_num').value
    var passo = document.querySelector('input#p_num').value
    var res = document.getElementById('res')
    var resposta = ''
    
    var count = 1
    
    if(init.length == 0 || fim.length == 0 || passo.length == 0){
        alert('[ERRO] Contém espaços em branco')
    }else{
        res.innerHTML = 'Contando:'
        i = Number(init)
        f = Number(fim)
        p = Number(passo)
        
        if(p <= 0){
            alert('[ERRO] Passo inválido. Considerando PASSO 1')
            p = 1
        }
        // Contagem crescente
        if(i < f){
            for(c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449}`
            }
        // Contagem decrescente
        }else {
            for(c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }    
        }
        res.innerHTML += `\u{1F3C1}`
    } 
}