let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);

// Añadiendo toda la tabla al body
document.getElementById('table2').appendChild(table);

//Cabecera
let tr1 = document.createElement('tr');
let th1 = document.createElement('th');

th1.setAttribute('id','titulo');
th1.setAttribute('colspan','3');
th1.innerHTML = 'Placeholder text';

tr1.appendChild(th1);
thead.appendChild(tr1);

//Cuerpo
let tr2 = document.createElement('tr');
let td1 = document.createElement('td');
let td2 = document.createElement('td');

td1.setAttribute('class','subtitulo');
td1.setAttribute('rowspan','2');
td1.innerHTML = 'Placeholder Text';

td2.setAttribute('class','subtitulo');
td2.setAttribute('colspan','2');
td2.innerHTML = 'Placeholder Text';

tr2.appendChild(td1);
tr2.appendChild(td2);
tbody.appendChild(tr2);

//Parte 2
let tr3 = document.createElement('tr');
let td3 = document.createElement('td');

td3.setAttribute('class','subtitulo');
td3.innerHTML = 'Placeholder Text';
tr3.appendChild(td3);

td3 = document.createElement('td');
td3.setAttribute('class','subtitulo');
td3.innerHTML = 'Placeholder Text';
tr3.appendChild(td3);

tbody.appendChild(tr3);

//Parte 3
let tr4 = document.createElement('tr');
let td4 = document.createElement('td');

td4.innerHTML = 'asdf';
tr4.appendChild(td4);

td4 = document.createElement('td');
td4.innerHTML = 'asdf';
tr4.appendChild(td4);

td4 = document.createElement('td');
td4.innerHTML = 'asdf';
tr4.appendChild(td4);

tbody.appendChild(tr4);

//Parte 4
tr4 = document.createElement('tr');
td4 = document.createElement('td');

td4.innerHTML = 'asdf';
tr4.appendChild(td4);

td4 = document.createElement('td');
td4.innerHTML = 'asdf';
tr4.appendChild(td4);

td4 = document.createElement('td');
td4.innerHTML = 'asdf';
tr4.appendChild(td4);

tbody.appendChild(tr4);

//Parte 5
tr4 = document.createElement('tr');
td4 = document.createElement('td');

td4.innerHTML = 'asdf';
tr4.appendChild(td4);

td4 = document.createElement('td');
td4.innerHTML = 'asdf';
tr4.appendChild(td4);

td4 = document.createElement('td');
td4.innerHTML = 'asdf';
tr4.appendChild(td4);

tbody.appendChild(tr4);

//Parte 6
tr4 = document.createElement('tr');
td4 = document.createElement('td');

td4.innerHTML = 'asdf';
tr4.appendChild(td4);

td4 = document.createElement('td');
td4.innerHTML = 'asdf';
tr4.appendChild(td4);

td4 = document.createElement('td');
td4.innerHTML = 'asdf';
tr4.appendChild(td4);

tbody.appendChild(tr4);

//Parte final
let tr5 = document.createElement('tr');
let th2 = document.createElement('th');
let th3 = document.createElement('th');

th2.innerHTML = 'Total';
th3.setAttribute('colspan','2');
th3.innerHTML = 'asdf';

tr5.appendChild(th2);
tr5.appendChild(th3);

tbody.appendChild(tr5);