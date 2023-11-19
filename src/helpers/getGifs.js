export const getGifs = async(category) => {

    const apiKey = 'M3ugRu4LGqINQ4KgF8hQKsE6pWnRUGr9';
    const endpoint = 'https://api.giphy.com/v1/gifs/search';
    const url = `${endpoint}?api_key=${apiKey}&q=${category}&limit=10`;

    const resp = await fetch(url);
    const {data = []}= await resp.json();
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    return gifs;
}