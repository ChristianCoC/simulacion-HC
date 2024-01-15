/* 
  Importante: 
  No modificar ni el nombre ni los argumentos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la función 
*/
function soloNumeros(array) {
  // La función llamada 'soloNumeros' recibe como argumento un arreglo de enteros y strings llamado 'array'.
  // Debe devolver un arreglo con solo los enteros.
  // Ej: 
  // soloNumeros([1, 'Henry', 2]) debe retornar [1, 2]

  // Tu código aca:
  return array.filter(element => typeof element === 'number');
}

// No modifiques nada debajo de esta linea //


module.exports = soloNumeros