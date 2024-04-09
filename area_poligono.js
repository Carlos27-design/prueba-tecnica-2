/*
Crea una única función (importante que sólo sea una) que sea capaz de calcular y retornar el área
de un polígono.
a. La función recibirá por parámetro sólo UN polígono a la vez.
b. Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
c. Imprime el cálculo del área de un polígono de cada tipo.
*/

//Función para calcular el area de los poligonos
function calcularAreaPoligono(poligono) {
  if (typeof poligono === 'string') {
    poligono = poligono.toLowerCase();
  }

  //En caso de que sea triangulo
  if (poligono === 'triangulo') {
    let base = 6;
    let altura = 4;
    let areaT = (base * altura) / 2;
    console.log('El area del triangulo es: ' + areaT);
  }
  //En caso de que sea rectangulo
  else if (poligono === 'rectangulo') {
    let base = 5;
    let altura = 8;
    let areaR = base * altura;
    console.log('El area del rectangulo es: ' + areaR);
  }
  //En caso de que sea cuadrado
  else if (poligono === 'cuadrado') {
    let lado = 6;
    let areaC = lado * lado;
    console.log('El area del cuadrado es: ' + areaC);
  }
  //En caso de que ingrese cualquier otro poligono
  else {
    console.log('Poligono no soportados');
  }
}

calcularAreaPoligono('cuadrado');
