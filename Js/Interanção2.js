const Janela_Proj = document.getElementById("Janela_Proj");
const Link_Proj = document.getElementById("Link_Proj");
const ProjDir = document.getElementById("ProjDir");
const ProjEsq = document.getElementById("ProjEsq");
const Janela_Titulo = document.getElementById("Janela_Titulo");

//Listas
let Nomes = ["PPT GAME","QM"]
let Links = [`https://golden-taffy-e77184.netlify.app/`,`https://lanchonetequickmunch.netlify.app/`]
let Imagens = ["url('Assets/Img/JogoPPT.png')","url('Assets/Img/QuickMunch.png')"]

// Contador
let Contador = 0

console.log(Nomes.length)

ProjDir.addEventListener("click",()=>{
    if (Contador == 0){
        Contador++
        Link_Proj.href = Links[Contador];
        Janela_Titulo.innerHTML = Nomes[Contador];
        Janela_Proj.style.backgroundImage = (`${Imagens[Contador]}`);
    }
})

ProjEsq.addEventListener("click",()=>{
    if (Contador == 1){
        Contador--
        Link_Proj.href = Links[Contador];
        Janela_Titulo.innerHTML = Nomes[Contador];
        Janela_Proj.style.backgroundImage = (`${Imagens[Contador]}`);
    }
})