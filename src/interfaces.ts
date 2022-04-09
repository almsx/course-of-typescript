// funcion para mostrar una fotografia
export { };

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

interface Picture {
    title: string, 
    date: string, 
    orientation: PhotoOrientation
}

interface PictureConfig {
    title?: string;
    date?: string;
    orientation?: PhotoOrientation;
}

function showPicture(picture: Picture) {
    console.log('title: ' + picture.title + ' date: ' + picture.date + ' orientation ' + picture.orientation);
}

function generatePicture(config: PictureConfig) {
    const pic = {title: 'Default', date: '2022-04-08'};
    if(config.title){
        pic.title = config.title;
    }
    if(config.date){
        pic.date = config.date;
    }

    return pic;
}

let myPic = {
    title: 'Test title Interfaces',
    date: '2022-04-08',
    orientation: PhotoOrientation.Landscape
};

showPicture(myPic);
showPicture({
    title: 'Test title interfaces 2',
    date: '2022-04-08',
    orientation: PhotoOrientation.Portrait,
    //extra: 'test' // Error
});

let picture = generatePicture({});
console.log('Picture ', picture);

picture = generatePicture({title: 'Travel to Acapulco'});
console.log('Picture ', picture);

picture = generatePicture({title: 'Travel to Acapulco', date: '2022-04-09'});
console.log('Picture ', picture);

// Interfaz: Usuario
interface User {
    readonly id: number; // Solo lectura.
    username: string;
    isPro: boolean;
}

let user: User;
user = {id: 1, username: 'alberto', isPro: true};
console.log('User ', user);
user.username = 'almsx';
// user.id = 2; // Error!
console.log('User ', user);
