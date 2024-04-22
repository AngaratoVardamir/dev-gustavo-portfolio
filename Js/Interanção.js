const Esquerda_CT = document.getElementById("Esquerda_Certificados");

const Direita_CT = document.getElementById("Direita_Certificados");

const Tela_Movimento = document.getElementById("Tela_Movimento");

let contador = 0

// mover icone
Esquerda_CT.addEventListener("mousedown",()=>{
    if ( contador < 140){
        contador+=40
    }
    Tela_Movimento.style.transform = (`translate(${contador}px`);
})

Direita_CT.addEventListener("mousedown",()=>{
    if ( contador > -140){
        contador-=40
    }
    Tela_Movimento.style.transform = (`translate(${contador}px`);
})
//Certificados
const Python = document.getElementById("Python");
Python.addEventListener("mousedown",()=>{
    PythonFu()
})
// Lua
const Lua = document.getElementById("Lua");
const Imagem_Personagem = document.getElementById("Imagem_Personagem");
const bars = document.getElementById("bars");

let Ativador = 0;
Lua.addEventListener("mousedown",()=>{
    if (Ativador == 1){
        Imagem_Personagem.src = ("Assets/Img/Programador_e_lobo.png");
        bars.style.color = ("rgb(0, 110, 255)");
        Ativador--
    }
    else{
        Imagem_Personagem.src = ("Assets/Img/_b7fc8120-f814-4f3d-b368-10ef5e0d7395-removebg-preview.png");
        bars.style.color = ("#b72be2");
        Ativador++
    }
})
//Tela modal certificado
const Tela_Certificando = document.getElementById("Tela_Certificando");
const Certificandoimg = document.getElementById("Certificando");
const Esquerda_CTelaModal = document.getElementById("Esquerda_CertificadosTela");
const Direita_CTelaModal = document.getElementById("Direita_CertificadosTela");
const Contador_Certificados = document.getElementById("Contador_Certificados");
const Link_Certificado = document.getElementById("Link_Certificado");
const Fechar_Janela = document.getElementById("Fechar_JanelaPai");
const Modulo = document.getElementById("Modulo");

let Certificados = 0

function PythonFu(){
    Tela_Certificando.style.display = ('flex');
    Fechar_Janela.addEventListener("click",()=>{
        Tela_Certificando.style.display = ('none');
        Certificados = 1;
        Modulo.innerHTML = (`C${Certificados}`);
    })
    function MudarImg(){
        Modulo.innerHTML = (`C${Certificados}`);
        if(Certificados == 1){
            Certificandoimg.style.backgroundimage = ("url('../Assets/Img/Certificados/PythonM1.png')");
            Link_Certificado.href = ("Assets/PDF/Gustavo-Augusto-Python-3-8211-Mundo-1-40-Horas-Certificado-Curso-em-Video.pdf");
    
        }
        if(Certificados == 2){
            Certificandoimg.style.backgroundimage = (`url("../Assets/Img/Certificados/PythonM1.png")`);
    
            Link_Certificado.href = ("Assets/PDF/Gustavo-Augusto-Python-3-8211-Mundo-2-40-Horas-Certificado-Curso-em-Video.pdf");
        }
    }
    
    Contador_Certificados.innerHTML = ("1/2")
    Esquerda_CTelaModal.addEventListener("mousedown",()=>{
        if (Certificados > 1){
            Certificados--
            MudarImg()
        }
        Contador_Certificados.innerHTML = (`${Certificados}/2`)
    })
    Direita_CTelaModal.addEventListener("mousedown",()=>{
        if (Certificados < 2){
            Certificados++
            MudarImg()
        }
        Contador_Certificados.innerHTML = (`${Certificados}/2`)
    })
}
