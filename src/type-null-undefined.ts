// Explicita
let nullVariable: null;
nullVariable = null;
// nullVariable = 1: // error!

let otherVariable = null;
otherVariable = 'test'; // error!

console.log('nullVariable', nullVariable);
console.log('otherVariable', otherVariable);

// Undefined
let undefinedVariable: undefined = undefined;
// undefinedVariable = 'test'; // error!

let otherUndefinedVariable = undefined;
otherUndefinedVariable = 1;

console.log('undefinedVariable', undefinedVariable);
console.log('otherUndefinedVariable', otherUndefinedVariable);

// Null y Undefined: Como Subtipos

// --strictNullChecks
// Para ejecturarlo se hace así
// tsc src/type-null-undefined.ts --strictNullChecks
// o también se puede agregar en el tsconfig.json habilitando esa sección
let albumName: string;
// albumName = null;
// albumName = undefined;