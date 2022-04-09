export {};

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

interface Entity {
    id: number;
    title: string;
}

interface Album extends Entity {
    //al hacer un extends, copia los atributos de Entity
    description: string
}

interface Picture extends Entity {
    //al hacer un extends, copia los atributos de Entity
    orientation: PhotoOrientation
}

const album: Album = {
    id: 1,
    title: 'El alma al aire',
    description: 'Disco de Alejandro Sanz lanzado en 2000'
};

const picture: Picture = {
    id: 1,
    title: 'Caratula El alma al Aire',
    orientation: PhotoOrientation.Landscape
};

//let newPicture: Picture;
let newPicture = {} as Picture;
newPicture.id = 2;
newPicture.title = 'No es lo mismo';

console.log('Album ',album);
console.log('Picture ',picture);
console.log('New Picture ',newPicture);
