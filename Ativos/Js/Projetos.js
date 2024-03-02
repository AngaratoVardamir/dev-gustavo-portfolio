function Em_breve(){
    var em_breve = window.alert(`Em Breve!`)
}
function CopyNumero(){
    var num = String('(31) 97240-7179')
    navigator.clipboard.writeText(num)
}
function Didi(){
    var code = String('31ab7990-d68d-4163-a22e-2b8aec97a94c')
    navigator.clipboard.writeText(code)
}
function CP_Segura(){
    const Copiado = document.getElementById("Botão2");
    Copiado.value = "COPIANDO"
}
function CP_Solta(){
    const Copiado = document.getElementById("Botão2");
    Copiado.value = "COPIA TEL"
}

function CV_Segura(){
    const CV = document.getElementById("Botão1");
    CV.value = "BAIXANDO"
}
function CV_Solta(){
    const CV = document.getElementById("Botão1");
    CV.value = "BAIXAR O CV"
}


function QR_Segura(){
    const CV = document.getElementById("Apoio");
    CV.innerHTML = "QRcode COPIANDO"
}
function QR_Solta(){
    const CV = document.getElementById("Apoio");
    CV.innerHTML = "Apoie Meu Trabalho"
}