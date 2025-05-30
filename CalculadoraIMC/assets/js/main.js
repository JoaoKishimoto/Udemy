// blocks the page from reloading on submitting
let form = document.querySelector('#formulario');
form.addEventListener('submit', function (event){
    event.preventDefault();
    // gets weight and height from form in Number format
    const peso = Number(document.getElementById('peso').value);
    const altura = Number(document.getElementById('altura').value);

    // in case weight or height aren't in Number format
    if(!peso && !altura) return setResultado('Peso e altura inválidos', 'erro');
    if (!altura) return setResultado('Altura inválida', 'erro');
    if (!peso) return setResultado('Peso inválido', 'erro');

    // if everything goes right, this calculates the imc
    const imc = calcularIMC(peso, altura);
    // this categorizes it
    const categoria = categorizaIMC(imc);

    // this creates the message
    const msg = `Seu IMC é ${imc.toFixed(2)} (${categoria})`
    // this shows the message
    setResultado(msg, 'certo');
})

// this function changes the result div to show the message
function setResultado(msg, className) {
    const resultado = document.getElementById('resultado');
    const p = criaP(msg, className);
    resultado.innerHTML = '';
    resultado.appendChild(p);
}

// this function creates a paragraph with a message and class
function criaP(msg, className){
    const p = document.createElement('p')
    p.innerHTML = msg;
    p.classList.add(className);
    return p;
}


// this function categorizes IMC
function categorizaIMC(imc) {
    if(imc < 18.5) return 'abaixo do peso';
    if(imc < 25) return 'peso normal';
    if(imc < 30) return 'sobrepeso';
    if(imc < 35) return 'obesidade grau 1';
    if(imc < 40) return 'obesidade grau 2';
    return 'obesidade grau 3';
}

// this function calculates the IMC
function calcularIMC(peso, altura) {
    const imc = peso / (altura ** 2);
    return imc;
}