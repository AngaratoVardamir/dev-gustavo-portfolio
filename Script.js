// Configurações de Chuva
function DropCreation() {
    const RainZone = document.getElementById('RainZone');
    //Quantidade de gotas
    let QuantityOfDrops = 40;
    for (let gotas = 1; gotas <= QuantityOfDrops; gotas++) {
        console.log(gotas)
        const NovaGota = document.createElement('div');
        NovaGota.setAttribute('class', 'Rain');
        RainZone.appendChild(NovaGota);
    }
}

function Animation() {
    const Rains = document.querySelectorAll(".Rain");

    const getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    Rains.forEach(rain => {
        // Definindo a duração da animação com variação aleatória entre 1s e 5s
        rain.style.animationDuration = getRandomNumber(1, 5) + "s";
        
        // Definindo o delay aleatório entre 0 e 2 segundos
        rain.style.animationDelay = getRandomNumber(0, 2000) + "ms";
        
        // Definindo a posição aleatória para a gota no eixo X (horizontal)
        rain.style.left = getRandomNumber(0, 100) + "%";  // Percentual da largura da tela
    });
}

DropCreation()
Animation()

