"use strict";
// Corchetes []

// Tipo explicito
let users: string[];
users = ['almsx', 'pepepotro', 'juanito'];
// users = [1, true, 'Test']; // Error

// Tipo inferido
let otherUsers = ['almsx', 'pepepotro', 'juanito'];
// otherUsers = [1, true, 'Test']; // Error

// Array<TIPO>
let pictureTitle: Array<string>;
pictureTitle = ['La risa en vacaciones', 'Chucky', 'Batman'];

// Accediendo a los valores en un Array
console.log('first user: ', users[0]);
console.log('first title ', pictureTitle[0]);

// Propiedades en Array
console.log('users length: ', users.length);

// Uso de funciones en Arrays
users.push('beto');
// Ordenar nuestro array
users.sort();
console.log('users: ', users);