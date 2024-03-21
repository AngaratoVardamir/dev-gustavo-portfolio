"user strict"
const Botao = document.querySelector("#Ativar-Desativar");
const Jan = document.getElementById("JanelaFechando");
const icon = document.querySelector("#Ativador-da-Janela>svg");

const IconesJan = document.getElementById("IconesJan");
//Copias
const AsJanelas = (Jan.innerHTML);
const IconsJanCop = IconesJan.src

Jan.innerHTML = ("");
IconesJan.src = ("");
// Evento de Click
Botao.addEventListener("click",(evt)=>{
    // Janela Fechada
    if(Jan.id == "JanelaAbrerto"){
        Jan.id = ("JanelaFechando")
        icon.style.fill=("var(--cor01)");
        icon.style.transition=("1s");
        Jan.style.transition=("1s");
        // Romever icones de dentro da Janela
        Jan.innerHTML = ("");
        IconesJan.src = ("");
    }
    // Janela Aberta
    else{
        Jan.id = ("JanelaAbrerto")
        icon.style.fill="var(--cor09)";
        icon.style.transition=("1s");
        // colocar icones de dentro da Janela

        //Janela aberta
        if (Jan.id == "JanelaAbrerto"){
            setTimeout(() => {
                Jan.innerHTML = AsJanelas
                IconesJan.src = IconsJanCop
            }, 800);
        }
    }
})