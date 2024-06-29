const HabButton = [...document.querySelectorAll("#MovementSkills>span")];
const Certificados = document.getElementById("certificates");
const ClosedButton = document.getElementById("ClosedButton");
const MoveCertificates = document.getElementById("MoveCertificates");
const CertificadoHTML = [...document.getElementsByClassName("CertHtml")];
const CertificadoJs = [...document.getElementsByClassName("CertJs")];
const CertificadoPython = [...document.getElementsByClassName("CertPy")];
const CertificadosSelects = [...document.getElementsByClassName("Cert_Card")];


ClosedButton.addEventListener("click", () =>{
    Certificados.style.display = "none";
    ClosedButton.style.display = "none";
    CertificadosSelects.map((select)=>{
        select.style.display = "none";
    })
});


HabButton.map((el,indx) => {
    el.addEventListener("click", () =>{
        ClosedButton.style.display = "grid";
        switch (indx) {
            case 0:
                //Tira tudo
                CertificadosSelects.map((select)=>{
                    select.style.display = "none";
                })
                //Html e Css
                Certificados.style.display = "block";
                CertificadoHTML.map((HtmlElem)=>{
                    HtmlElem.style.display = "block";
                })
                break;
            case 1:
                //Tira tudo
                CertificadosSelects.map((select)=>{
                    select.style.display = "none";
                })
                //Html e Css
                Certificados.style.display = "block";
                CertificadoHTML.map((HtmlElem)=>{
                    HtmlElem.style.display = "block";
                })
                break;
            case 2:
                //Tira tudo
                CertificadosSelects.map((select)=>{
                    select.style.display = "none";
                })
                //Javascript
                Certificados.style.display = "block";
                CertificadoJs.map((JsElem)=>{
                    JsElem.style.display = "block";
                })
                break;
            case 3:
                //Tira tudo
                CertificadosSelects.map((select)=>{
                    select.style.display = "none";
                })
                //Python
                Certificados.style.display = "block";
                CertificadoPython.map((PyElem)=>{
                    PyElem.style.display = "block";
                })
                break;
            case 4:
                Certificados.style.display = "block";
                
                break;
            default:
                console.log("Invalid")
                break;
        }
    })
})

MoveCertificates