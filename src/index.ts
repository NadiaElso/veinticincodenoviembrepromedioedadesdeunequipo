//El DT de los infantiles del equipo de fútbol 
//desea saber el promedio de la edad de los chicos
//La edad de los chicos va de 3 a 7 años. 
//Las edades son cargadas al azar (use la función aleatorio
//(menorValor, mayorValor), es decir aleatorio(3,7))
//Muestre todas las edades y el promedio de las mismas.

function edadesalazar(max:number,min:number){ 
let edades:number[]=new Array(10);

let totaledadesmin3:number;
totaledadesmin3=0;
let totaledadesmin4:number;
totaledadesmin4=0;
let totaledadesmin5:number;
totaledadesmin5=0;

let totaledadesmax6:number;
totaledadesmax6=0;
let totaledadesmax7:number;
totaledadesmax7=0;
let promedio:number;
promedio=0;
for (let index = 0; index < edades.length; index++) {
edades[index]= Math.floor(Math.random() * (max - min)) + min;
console.log("Las edades son:" +edades);
if (edades[index]===3) {
  totaledadesmin3=edades.reduce((a, b) => a + b, 0);

console.log("la suma total de las edades igual a 3 es:"+ totaledadesmin3);
  promedio=totaledadesmin3/edades[index];
  console.log("El promedio de las edades igual a 3:"+promedio)
}
else if(edades[index]===4) {
  totaledadesmin4=edades.reduce((a, b) => a + b, 0);

console.log("la suma total de las edades igual a 4 es:"+ totaledadesmin4);
  promedio=totaledadesmin4/edades[index];
  console.log("El promedio de las edades igual a 4:"+promedio)
}
else if (edades[index]===5) {
  totaledadesmin5=edades.reduce((a, b) => a + b, 0);

console.log("la suma total de las edades igual a 5 es:"+ totaledadesmin5);
  promedio=totaledadesmin5/edades[index];
  console.log("El promedio de las edades igual a 5:"+promedio)
}
else if (edades[index]===6) {
  totaledadesmax6=edades.reduce((a, b) => a + b, 0);

console.log("la suma total de las edades igual a 6 es:"+ totaledadesmax6);
  promedio=totaledadesmax6/edades[index];
  console.log("El promedio de las edades igual a 6:"+promedio)
}
else { 
  totaledadesmax7=edades.reduce((a, b) => a + b, 0);

console.log("la suma total de las edades igual a 7 es:"+ totaledadesmax7);
  promedio=totaledadesmax7/edades[index];
  console.log("El promedio de las edades igual a 7:"+promedio)
 }


}


return edadesalazar 

 }


 edadesalazar(3,7)

