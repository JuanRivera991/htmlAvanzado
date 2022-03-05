let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);

// Añadiendo toda la tabla al body
document.getElementById('table1').appendChild(table);

//Datos fila 1
let fila_1 = document.createElement('tr');

let datos_1_1 = document.createElement('td');
datos_1_1.innerHTML = "1";

let datos_1_2 = document.createElement('td');
datos_1_2.innerHTML = "2";

let datos_1_3 = document.createElement('td');
datos_1_3.innerHTML = "3";

let datos_1_4 = document.createElement('td');
datos_1_4.innerHTML = "4";

fila_1.appendChild(datos_1_1);
fila_1.appendChild(datos_1_2);
fila_1.appendChild(datos_1_3);
fila_1.appendChild(datos_1_4);
tbody.appendChild(fila_1);

//Datos fila 2
let fila_2 = document.createElement('tr');
let datos_2_1 = document.createElement('td');
datos_2_1.innerHTML = "5";

let datos_2_2 = document.createElement('td');
datos_2_2.innerHTML = "6";
let datos_2_3 = document.createElement('td');
datos_2_3.innerHTML = "7";

let datos_2_4 = document.createElement('td');
datos_2_4.innerHTML = "8";

fila_2.appendChild(datos_2_1);
fila_2.appendChild(datos_2_2);
fila_2.appendChild(datos_2_3);
fila_2.appendChild(datos_2_4);
tbody.appendChild(fila_2);

//Datos fila 3
let fila_3 = document.createElement('tr');

let datos_3_1 = document.createElement('td');
datos_3_1.innerHTML = "9 <br> 13";

let datos_3_2 = document.createElement('td');
datos_3_2.innerHTML = "10 <br> 14";

let datos_3_3 = document.createElement('td');
datos_3_3.innerHTML = "11 <br> 15";

let datos_3_4 = document.createElement('td');
datos_3_4.innerHTML = "12 <br> 16";

fila_3.appendChild(datos_3_1);
fila_3.appendChild(datos_3_2);
fila_3.appendChild(datos_3_3);
fila_3.appendChild(datos_3_4);
tbody.appendChild(fila_3);

