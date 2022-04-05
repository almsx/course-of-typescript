// El comodin export permitirá que el parametro user sea considerado único
// Dentro de todo el proyecto.
// Para que funcione, debe de volverse a compilar y ya reconocerá dicha exportación.

export {};
// [1, 'user']
let user: [number, string];
user = [1, 'user'];

console.log('user: ', user);
console.log('username ', user[1]);
console.log('username.length ', user[1].length);
console.log('id ', user[0]);

// Tuplas con varios valores
// id, username, isPro
let userInfo: [number, string, boolean];
userInfo = [2, 'Tux', true];

console.log('userInfo: ', userInfo);

// Arreglo de tuplas
let array: [number, string][] = [];
array.push([1, 'user']); // 0
array.push([2, 'admin']); // 1
array.push([3, 'superadmin']); // 2

console.log('array: ', array);

// Uso de funciones Array
// Modificar el nombre de un usuario a otro
// superadmin -> superadmin001

array[2][1] = array[2][1].concat('001'); // superadmin001
console.log('array: ', array);


