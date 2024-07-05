// Crea una función que verifique si 2 integrales son iguales sin usar los operadores de comparación

function equalIntegers(a,b){
  // En esta constante se esta filtrando los valores y solo retornando los unicos 
  const uniqueValues = [...new Set([ a, b ])];
  // el tamañp del arreglo debería ser 1 si es que las integrales pasadas por argumentos son iguales
  // entonces para no utilizar operadores condicionales puedo acogerme de la regla de los "falsy" JS.
  // Los "falsy" son 0, '', false, NaN y un subgrupo llamado nullish que lo conforman null y undefined.
  // Me conviene utilizar el cero para retornar un false para después negarlo (resultaría en un true) y
  // responda con un true si es que solo existe un valor en el arreglo "uniqueValues" y false si hay más de uno

  return !(box.length - 1);
}

// Esta es otra solución
function equalIntegers2(a,b) {
  return !(a-b)
}