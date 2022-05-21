const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');
console.log(ctx);

function square(){
    //Contorno
    ctx.beginPath();
    ctx.lineWidth = 6;
    ctx.strokeStyle = 'rgb(156, 12, 12)';
    ctx.rect(25, 50, 100, 100);
    ctx.stroke();

    //Cuadrado
    ctx.fillStyle = 'red';
    ctx.fillRect(25,50,100,100);
}

function circle(){
    //Circulo
    ctx.beginPath();
    ctx.arc(250, 100, 60, 0, 2*Math.PI);
    ctx.fillStyle= 'rgb(241, 254, 92)';
    ctx.fill();

    //Contorno circle
    ctx.lineWidth = 4;
    ctx.strokeStyle = 'rgb(226, 237, 86)';
    ctx.stroke();
}

function triangle(){
    //Triangulo
    ctx.beginPath();
    ctx.moveTo(400,50);
    ctx.lineTo(350,150);
    ctx.lineTo(450,150);
    ctx.closePath();

    //Contorno y relleno
    ctx.fillStyle = "rgb(17, 89, 209)";
    ctx.fill();

    ctx.lineWidth = 4;
    ctx.strokeStyle = 'rgb(17, 84, 195)';
    ctx.stroke(); 
}

square();
circle();
triangle();