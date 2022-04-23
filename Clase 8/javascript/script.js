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
    ctx.arc(75, 250, 60, 0, 2*Math.PI);
    ctx.fillStyle="rgb(129, 198, 246)";
    ctx.fill();

    //Contorno circle
    ctx.lineWidth = 4;
    ctx.strokeStyle = 'rgb(91, 187, 254)';
    ctx.stroke();
}

function rectangle(){
    //Contorno
    ctx.beginPath();
    ctx.lineWidth = 6;
    ctx.strokeStyle = 'rgb(108, 185, 55)';
    ctx.rect(500, 250, 200, 100);
    ctx.stroke();

    //Rectangulo
    ctx.fillStyle = 'rgb(118, 202, 60)';
    ctx.fillRect(500,250,200,100);
}

function triangle(){
    //Triangulo
    ctx.beginPath();
    ctx.moveTo(300,50);
    ctx.lineTo(250,150);
    ctx.lineTo(350,150);
    ctx.closePath();

    //Contorno y relleno
    ctx.fillStyle = 'rgb(241, 254, 92)';
    ctx.fill();

    ctx.lineWidth = 4;
    ctx.strokeStyle = 'rgb(226, 237, 86)';
    ctx.stroke();

    
}

function hexagon(){
    //Hexagono
    const a = 2 * Math.PI / 6;
    const r = 60;
    //Posición
    const x = 300;
    const y = 260;

    ctx.beginPath();
    for (var i = 0; i < 6; i++) {
        ctx.lineTo(x + r * Math.cos(a * i), y + r * Math.sin(a * i));
    }
    ctx.closePath();

    //Contorno y relleno
    ctx.fillStyle = "rgb(252, 82, 82)";
    ctx.fill();

    ctx.strokeStyle = 'rgb(218, 70, 70)';
    ctx.stroke();
    
}

function pentagon(){
    //Pentagono
    const a = 2 * Math.PI / 5;
    const r = 60;
    const s = (Math.PI / 180.0) * -18;
    //Posición 
    const x = 600;
    const y = 100;
    
    ctx.beginPath();
    for (var i = 0; i < 5; i++) {
        ctx.lineTo(x + r * Math.cos(a * i+ s), y + r * Math.sin(a * i +s));
    }
    ctx.closePath();

    //Contorno y relleno
    ctx.fillStyle = "rgb(157, 27,236)";
    ctx.fill();

    ctx.strokeStyle = 'rgb(132, 28, 199)';
    ctx.stroke();
    
}

square();
circle();
rectangle();
triangle();
hexagon();
pentagon();