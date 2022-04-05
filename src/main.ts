console.log('Hello from Main');

// Number
// Tipado Explicito
let phone: number;
phone = 1;
phone = 123;
//phone = 'hola'; // error por tipo

// Tipado Inferido
let phoneNumber = 123;
phoneNumber = 134;
//phoneNumber = false; // error por tipo

let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// Tipo: Boolean
// Tipado explicito
let isPro: boolean;
isPro = true;
//isPro = 1; // error por tipo

// Tipado Inferido
let isUserPro = false;
isUserPro = true;
//isUserPro = 1; // error por tipo

// Strings
let userName: string = 'Alberto Luebbert';
userName = "Luis";
let firstName = 'Luis';
// userName = true: // error por tipo string

// Template String
// Uso de back-tick `

let userInfo: string;
userInfo = `
	User Info:
	userName: ${userName}
	firstName: ${firstName}
	phone: ${phone}
	isPro: ${isPro}	
`;

console.log('userInfo', userInfo);