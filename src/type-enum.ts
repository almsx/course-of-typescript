// Orientación para Fotografías
// Ejemplo de definición de valores en JavaScript
// const landscape = 0;
// const portrait = 1;
// const square = 2;
// const panoramic = 3;

enum PhotoOrientation {
	Landscape = 0, // 0
	Portrait = 1, // 1
	Square = 2, // 2
	Panoramic = 3 // 3
}

const landscape: PhotoOrientation = PhotoOrientation.Landscape;
console.log('landscape: ', landscape);
console.log('Landscape', PhotoOrientation[landscape]);

enum PictureOrientation {
	Landscape = 10, // 10
	Portrait, // 11 Sube un valor en autómatico de 1 en 1
	Square, // 12
	Panoramic // 13
}

console.log('Portrait ', PictureOrientation.Portrait);

enum Country {
	Argentina = 'AR',
	Brasil = 'BR',
	Chile = 'CL',
	Mexico = 'MX',
	Peru = 'PE'
}

const country: Country = Country.Mexico;
console.log('country: ', country);