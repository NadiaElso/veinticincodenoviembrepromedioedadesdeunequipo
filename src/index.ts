//El DT de los infantiles del equipo de fútbol
//desea saber el promedio de la edad de los chicos
//La edad de los chicos va de 3 a 7 años.
//Las edades son cargadas al azar (use la función aleatorio
//(menorValor, mayorValor), es decir aleatorio(3,7))
//Muestre todas las edades y el promedio de las mismas.

function edadesalazar(max: number, min: number) {
  let edades: number[] = new Array(10);
  let totaledades: number;
  totaledades = 0;
  let promediototal:number;
  promediototal=0;
  
   for (let index = 0; index < edades.length; index++) {
    edades[index] = Math.floor(Math.random() * (max - min)) + min;
    console.log("Las edades son:" + edades);
    totaledades = edades.reduce((a, b) => a + b, 0);
    console.log(" La suma total de todas las edades:"+ totaledades);
    promediototal=totaledades/edades[index];
    console.log("El promedio total es:"+ promediototal);
  }

  return edadesalazar;
}

edadesalazar(3, 7);
