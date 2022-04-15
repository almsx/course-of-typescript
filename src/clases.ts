export {};

enum PhotoOrientation {
	Landscape,
	Portrait,
	Square,
	Panorama
}

class Picture {
	// Propiedades
	id: number;
	title: string;
	orientation: PhotoOrientation;

	// Constructor
	constructor(id: number, title: string, orientation: PhotoOrientation) {
		this.id = id;
		this.title = title;
		this.orientation = orientation;
	}

	// Comportamiento de nuestra clase
	toString() {
		return `[id: ${this.id}, title: ${this.title}, orientation: ${this.orientation}]`;
	}
}

class Album {
	// Propiedades
	id: number;
	title: string;
	pictures: Picture[];

	// Constructor
	constructor(id: number, title: string) {
		this.id = id;
		this.title = title;
		this.pictures = [];
	}

	// Comportamiento de nuestra clase
	addPicture(picture: Picture) {
		this.pictures.push(picture);
	}
}

const album: Album = new Album(1, 'Personal Pictures');
const picture: Picture = new Picture(1, 'Primer Foto', PhotoOrientation.Square);
album.addPicture(picture);

console.log('Mostrar album ', album);