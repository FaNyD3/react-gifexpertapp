
// devuelve una promesa que resuelve la condicion de las imagenes
export const getGifs = async ( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=beINULh43hDDPtgiYpgG7z9QOB2nCm01`
    const resp = await fetch(url)
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;

}
