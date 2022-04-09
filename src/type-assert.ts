export {};
// <> // Angle Bracket Syntax
let username: any;
username = 'almsx';

//Tenemos una cadena, TS confia en mi :)
// <string> es un operador de aserción donde le indicaremos que sea un tipo string.
let message: String = (<string>username).length > 5 ? 'Welcome ' + username : 'Username is short, change please.';
console.log('message ', message);

let usernameWidthId: any = 'alberto 1';
// ¿como obtener el username?
username = (<string>usernameWidthId).substring(0, 7);
console.log('Username only ', username);

// Sintaxis "as"
message: (username as string).length > 5 ? 'Welcome ' + username : 'Username is short, change please.';
console.log('message ', message);

let helloUser: any;
helloUser = 'Hello Alberto';
username = (helloUser as string).substring(6);
console.log('username ', username);