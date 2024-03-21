const Botoes = [...document.querySelectorAll(".Botão-da-Cabeça")];
const BotãoCV = document.querySelector("#Botão1 > a");
const BotãoCN = document.querySelector("#Botão2");

BotãoCV.addEventListener("click",()=>{
    BotãoCV.innerHTML = (`BAIXANDO CV`);
    setTimeout(()=>{
        BotãoCV.innerHTML = (`BAIXAR O CV`);
    },2000)
});
BotãoCN.addEventListener("click",()=>{
    navigator.clipboard.writeText("+55 31 9 7240-7179")

    BotãoCN.innerHTML = ("NÚMERO COPIADO");
    setTimeout(()=>{
        BotãoCN.innerHTML = ("COPIAR NÚMERO");
    },2000)
});

//=======================
const QR_CODE = document.querySelector("#QR-CODE");

QR_CODE.addEventListener("click",()=>{
    navigator.clipboard.writeText("31ab7990-d68d-4163-a22e-2b8aec97a94c");
})