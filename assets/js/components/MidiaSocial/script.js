const PhoneButton = document.getElementById('Telefone');
const EmailButton = document.getElementById('Email');
const CVbutton = document.getElementById('CV');

PhoneButton.addEventListener('click', ()=>{
    alert('A página copio o número de telefone do criador para sua área de transferência');
    navigator.clipboard.writeText("+55 31 9 7240-7179");
})
EmailButton.addEventListener('click', ()=>{
    alert('A página copio o Email do criador para sua área de transferência');
    navigator.clipboard.writeText("gus191798@gmail.com");
});
CVbutton.addEventListener('click', (Click)=>{
    alert('A página está baixando o currículo do criador no seu dispositivo');

    const url = ("assets/images/CV.pdf");
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Currículo.pdf';
    document.body.appendChild(a);
    a.click();
});