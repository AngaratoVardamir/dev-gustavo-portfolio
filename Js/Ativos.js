const Botoes = [...document.querySelectorAll(".Botão-da-Cabeça")];
const BotãoCV = document.querySelector("#Botão1");
const BotãoCN = document.querySelector("#Botão2");

BotãoCV.addEventListener("click",()=>{
    BotãoCV.innerHTML = (`<a download="Currículo-Gustavo.AuGusto" href="Assets/PDF/CV.pdf">A BAIXANDO O CV</a>`);
    setTimeout(()=>{
        BotãoCV.innerHTML = (`<a download="Currículo-Gustavo.AuGusto" href="Assets/PDF/CV.pdf">BAIXAR O CV</a>`);
    },2000)
});
BotãoCN.addEventListener("click",()=>{
    navigator.clipboard.writeText("+55 31 9 7240-7179").then()

    BotãoCN.innerHTML = ("NÚMERO COPIANDO");
    setTimeout(()=>{
        BotãoCN.innerHTML = ("COPIAR NÚMERO");
    },2000)
});

//=======================