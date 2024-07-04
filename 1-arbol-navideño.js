// Crear un arbol navideño del tamaño que nosotros le indiquemos en el programa

// Modelo de un arbol de 3 filas, y el número 3 es el ingresaremos como argumento
// al programa para que la consola nos envie esta repuesta:
//   *
//  *** 
// *****
//   *

function chrismasTree(lenght) {
    // Esta variable controlará la cantidad de espacios que tiene que tener una fila
    let rowSpaces = 0;
    // Esta constante representa la cantidad de "*" de la fila base, que será la más grande
    const quantityAsterickBaseRow = lenght*2-1;
    // contenemos las respuestas de la variable "row"
    const container = [];

    // while actuará en nuestro código hasta que terminé de construir todas las filas con sus respectivos espacios
    while(rowSpaces < quantityAsterickBaseRow){
      let row = '*'.repeat(quantityAsterickBaseRow - rowSpaces);
      if(rowSpaces) row = ' '.repeat(rowSpaces/2) + row + ' '.repeat(rowSpaces/2); 
      container.unshift(row)
      rowSpaces+=2;
    }

    // para que en la consola aparezca que nuestro arból navideño tiene un tronco solamente
    // agregamos una última final de "container" un "*" centrado a la mitad, y para hacer
    // añadimos el último resultado "row"
    container.push(container[0]);

    // Lo unimos y damos un salto de línea
    return container.join('\n');
}

console.log(chrismasTree(20));