const apiKey = '7x8bzBkkTbz8o2hsxAw63HTwb0YTsXXV';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

//Peticion encadenadas, el response.json es un metodo que tambien devuelve una promeso por lo que se puede encadenar
//y usar el .then de esa nueva promesa retornada, el .catch sive para todos.
peticion
    .then( (response) => response.json() )
    .then( ( {data} ) => {

        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;

        document.body.append( img )



    })
    .catch( console.warn )