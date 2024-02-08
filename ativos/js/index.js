function Projeto(){
    var Em_Breve = window.alert('Em Breve')
}
function Copia(){
    var texto = document.getElementById('Copia');
    texto.select();
    document.execCommand('copy');
    alert('Texto copiado: ' + Copia.value);
}