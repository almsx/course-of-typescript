// Type: object
let user: object;
user = {}; // Object

user = {
	id: 1,
	userName: 'almsx',
	firstName: 'Alberto',
	isPro: true,
};

console.log('user', user);
// Object vs object(Clase JS vs tipo TS)
const myObj = {
	id: 1,
	userName: 'almsx',
	firstName: 'Alberto',
	isPro: true,
};

const isIstance = myObj instanceof Object; // Obtendra un valor booleano true o false a partir de la clase Object de JavaScript.


console.log('isIstance', isIstance);
console.log('user.username', myObj.userName);
