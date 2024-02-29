function Em_breve(){
    var em_breve = window.alert(`Em Breve!`)
}
function CopyNumero(){
    var num = String('(31) 97240-7179')
    navigator.clipboard.writeText(num).then(()=>{
        alert('Numero Copiado!!!')
    })
}
function Didi(){
    var code = String('31ab7990-d68d-4163-a22e-2b8aec97a94c')
    navigator.clipboard.writeText(code).then(()=>{
        alert('QRcode Copiado!!!')
    })
}