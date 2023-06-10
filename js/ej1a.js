
document.write("<h2>a.	Muestra el primer elemento del arreglo.</h2>");
document.write("[25.3, 26.1, 24.8, 25.6, 27.2, 28.4,29.1, 28.6, 27.9, 26.7, <br>");
document.write("25.4, 24.9, 26.3, 27.5, 28.9, 29.7, 28.2, 26.8, 25.7, 24.5,<br>"); 
document.write("25.8, 27.3, 28.1, 28.7,   29.2, 29.8, 29.6, 28.3, 27.1, 26.4, 25.9, 26.5]<br>");
// Creamos el array con sus temperaturas para cada dia de enero
var tempEnero = [25.3, 26.1, 24.8, 25.6, 27.2, 28.4,
     29.1, 28.6, 27.9, 26.7, 25.4, 24.9, 26.3, 27.5, 28.9, 
     29.7, 28.2, 26.8, 25.7, 24.5, 25.8, 27.3, 28.1, 28.7, 
     29.2, 29.8, 29.6, 28.3, 27.1, 26.4, 25.9, 26.5];

// Mostramos el primero valor del array
var primerValor=tempEnero[0];
//console.log(primerValor);

document.write("<p>El primer valor del vector es " + primerValor + "</p>"); 