// El comodin export permitirá que el parametro user sea considerado único
// Dentro de todo el proyecto.
// Para que funcione, debe de volverse a compilar y ya reconocerá dicha exportación.

export {};
// Union 
// 10, '10'

// let idUser: number | string;
// idUser = 10;
// idUser = '10';

// // Buscar username ingresado un ID
// function getUserNameByID(id: number | string) {
// 	// Lógica de negocio, find the user
// 	if (typeof id === 'number') {
// 		return 'User ID: ' + id;
// 	} else {
// 		return 'User ID: ' + id;
// 	}
// }

// getUserNameByID(20);
// getUserNameByID('20');

// Alias de Tipos para TypeScript
// Son útiles para evitar la redundancia en los 
// unión de tipos.

type IdUser = number | string;
type Username = string;
let idUser: IdUser;
idUser = 10;
idUser = '10';

// Buscar username ingresado un ID
function getUserNameByID(id: IdUser): Username {
	// Lógica de negocio, find the user
	return 'alberto'
}

getUserNameByID(20);
getUserNameByID('20');

// Tipos Literales
// 100x100, 500x500, 1000x1000
type SquareSize = '100x100' | '500x500' | '1000x1000';
//let smallPicture: SquareSize = '200x200'; // error
let smallPicture: SquareSize = '100x100'; // Valor Válido
let mediumPicture: SquareSize = '500x500'; // Valor Válido