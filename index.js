let notas;
let promedio;
let suma=0;
let nnotas=parseInt(prompt("Ponga la cantidad de notas que desea promediar"))
for(i=1; i <= nnotas; i++){
let notas=parseFloat(prompt("Introduzca la Nota Nr: "+ i));
suma +=  notas;
}


promedio = suma / nnotas;
alert("el resultado es " + promedio);

if (promedio>=6) {
   alert("APROBADO");
}else{
    alert("DESAPROBADO");
}
