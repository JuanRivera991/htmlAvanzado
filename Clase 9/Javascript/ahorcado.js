const words = ['Carne','Martillo', 'Lavadora','Sucio','Cangrejo','Lento','Alimentos','Delgado','Cubo','Comida','Caracol','Abajo','Alumno','Bonito','Cesta','Sol','Beber','Botella','Hamburguesa','Invierno'];
const ctnPalabras = document.getElementById('ctnPalabra');
const btnComenzar = document.getElementById('btnComenzar');
const letrasElemento = document.getElementById('letrasUsadas');

let canvas = document.getElementById('lienzo');
let ctx = canvas.getContext('2d');
ctx.canvas.width = 0;
ctx.canvas.height = 0;

const partesCuerpo = [
    [4,2,1,1],
    [4,3,1,2],
    [3,5,1,1],
    [5,5,1,1],
    [3,3,1,1],
    [5,3,1,1]
];

let palabraSeleccionada;
let letrasUsadas;
let errores;
let aciertos;

function dibujarPersona(){
    ctx.canvas.width = 120;
    ctx.canvas.height = 160;
    ctx.scale(20,20);
    ctx.clearRect(0,0,canvas.width, canvas.height);

    ctx.fillStyle = '#d95d39';
    ctx.fillRect(0, 7, 4, 1);
    ctx.fillRect(1, 0, 1, 8);
    ctx.fillRect(2, 0, 3, 1);
    ctx.fillRect(4, 1, 1, 1);
};

function dibujarPalabra(){
    palabraSeleccionada.forEach(letra => {
        const letraElement = document.createElement('span');
        letraElement.innerHTML = letra.toUpperCase();
        letraElement.classList.add('letra');
        letraElement.classList.add('escondido');
        ctnPalabras.appendChild(letraElement);
    });
}

function selecionarPalabra(){
    let palabra = words[Math.floor((Math.random() * words.length))].toUpperCase();
    palabraSeleccionada = palabra.split('');
};

function terminarJuego(){
    document.removeEventListener('keydown', letraEvent);
    btnComenzar.style.display = 'block';
}

function letraCorrecta(letra){
    const {children} = ctnPalabras;
    for(let i = 0; i < children.length; i++){
        if(children[i].innerHTML === letra){
            children[i].classList.toggle('escondido');
            aciertos++;
        }
    }
    if(aciertos === palabraSeleccionada.length) terminarJuego();
}


function letraIncorrecta(){
    agregarParte(partesCuerpo[errores]);
};

function agregarParte(parteCuerpo){
    ctx.fillStyle = '#fff';
    ctx.fillRect(...parteCuerpo);
    errores++;
    if(errores === partesCuerpo.length) terminarJuego();
};

function agregarLetra(letra){
    const letraElement = document.createElement('span');
    letraElement.innerHTML = letra.toUpperCase();
    letrasElemento.appendChild(letraElement);
}

function inputLetra(letra){
    if(palabraSeleccionada.includes(letra)){
        letraCorrecta(letra);
    }else{
        letraIncorrecta();
    }
    agregarLetra(letra);
    letrasUsadas.push(letra);
}

function letraEvent(e){
    let nuevaLetra = e.key.toUpperCase();

    if(nuevaLetra.match(/^[a-zñ]$/i)&& !letrasUsadas.includes(nuevaLetra)){
        inputLetra(nuevaLetra);
    }
};

function comenzarJuego(){
    letrasUsadas = [];
    errores = 0;
    aciertos = 0;
    ctnPalabras.innerHTML = '';
    letrasElemento.innerHTML = '';
    btnComenzar.style.display = 'none';
    dibujarPersona();
    selecionarPalabra();
    dibujarPalabra();
    document.addEventListener('keydown',letraEvent);
}



btnComenzar.addEventListener("click", comenzarJuego);