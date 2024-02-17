function Em_breve(){
    var em_breve = window.alert(`Em Breve!`)
}
function CopyNumero(){
    var num = String('(31) 97240-7179')
    navigator.clipboard.writeText(num).then(()=>{
        alert('Numero Copiado')
    })
}