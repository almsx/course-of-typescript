// Definiremos una función al estilo de JavaScript
// function createPicture(title, date, size) {
//     // Code for create Picture
// }

type SquareSize = '100x100' | '500x500' | '1000x 1000';

// Usamos TS, además definimos tipos para parametros.
function createPicture(title: string, date: string, size: SquareSize) {
    // Code for create Picture
    console.log('Create picture using ', title, date, size);
}

createPicture('My Birthday', '2022-04-08', '100x100');

//Solo queremos mandar por ejemplo 2 parametros
//Para solucionarlo, podemos mandar un parametro opcional.

function createPictureOptional(title?: string, date?: string, size?: SquareSize) {
    // Code for create Picture
    console.log('Create picture using ', title, date, size);
}
createPictureOptional('Trip to Cancun', '2022-01-01');
createPictureOptional('100x100');
createPictureOptional();

// Crear array functions al estilo de ES6.
let createPic = (title: string, date: string, size: SquareSize): object => {
    // Regresaremos un objeto tipo JSON
    return {
        title,
        date,
        size
    }
};

const picture = createPic('Christmas Day', '2022-12-25', '500x500');
console.log('Picture ', picture);