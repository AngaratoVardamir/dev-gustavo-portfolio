const FP = document.querySelector("#Foto-de-Perfil");
const Foto_Perfil = document.querySelector(".Foto-de-Perfil");
const Bolinhas = [...document.querySelectorAll(".Ball")];
const FotoBorda = document.querySelector("#Foto-de-Perfil-Borda");
//clicar na foto de perfil
FP.addEventListener("click",()=>{
    Bolinhas.map((el)=>{
        el.classList.toggle(["BallSelect"]);
    })
    Foto_Perfil.classList.toggle(["FotoSelect"]);
})
