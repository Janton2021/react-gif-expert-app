export const getGifs = async( category ) => {
    
    const url = `https://api.giphy.com/v1/gifs/search?api_key=s3wJaRs9pGrMsV90kGp5RoAZT3DJbm71&q=${ category }&limit=10`
    const resp = await fetch( url );
    const { data } =  await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url:img.images.downsized_medium.url
    }));

    console.log(gifs);
    return gifs;

}