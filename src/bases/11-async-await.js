//Asyn Await

export const getImage = async () => {

    //En el asybc await se manejan los errores con try catch
    try {

        const apiKey = '7x8bzBkkTbz8o2hsxAw63HTwb0YTsXXV';
        const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await respuesta.json();
        const { url } = data.images.original;
        const img = document.createElement('img');

        img.src = url;

        document.body.append(img)

        return url;


    } catch (error) {

        console.error(error);
        
        return 'no existe';
        
    }



}

getImage();