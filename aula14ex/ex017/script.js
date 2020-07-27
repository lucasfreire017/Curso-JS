function caulc(){
    
    var num = document.getElementById("num").value
    var res = document.getElementById('tabuada')
    tabuada.value = ''
    num = Number(num)
    
    if(num == ''){
        alert('Por favor, digite um número')
    }else{
        for(c = 1; c < 11; c++){
        tabuada.value += `${num} X ${c} = ${num*c}\n`
        }
    }
}