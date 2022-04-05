// Tipo Explicito 
let idUser : any;
idUser = 1; // number
idUser = '1'; // string
console.log('iduser ' + idUser);

// Tipo Inferido
let otherId;
otherId = 1;
otherId = '1';
console.log('otherId ' + otherId);

let surprise: any = 'Hello TypeScript';
// Partir la cadena y obtener solo TypeScript
// surprise.sayHello();
const res = surprise.substring(6); // Error cuando no sea un string
console.log('res', res);

