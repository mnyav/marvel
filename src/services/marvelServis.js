

const marvelServis = () => {
    const _apiKey = "apikey=2619eead8ecde910454bb92ec2aec32f";



    const getResorses = async (url) => {
        const result = await fetch(url)
        if (!result.ok) {
            throw new Error("ERROR_SERVICE")
        }

        return result.json()

    }




    const getAllCharacters = async (offset = 210) => {
        const resCharList = await getResorses(`https://gateway.marvel.com:443/v1/public/characters?limit=9&offset=${offset}&${_apiKey}`)
        return resCharList.data.results.map(_transformCharacter)
    }

    const getCharacter = async (id) => {
        const res = await getResorses(`https://gateway.marvel.com:443/v1/public/characters/${id}?${_apiKey}`)
        return _transformCharacter(res.data.results[0])
    }

    const getCharacterComics = async (id) => {
        console.log(id);
        const resComicsList = await getResorses(`https://gateway.marvel.com:443/v1/public/characters/${id}?${_apiKey}`)

        return _comicsListItem(resComicsList.data.results[0])
    }


    const _transformCharacter = (res) => {
        if (!res.description) {
            res.description = "Sorry, no information"
        }
        return {
            id: res.id,
            name: res.name,
            thumbnail: res.thumbnail.path + "." + res.thumbnail.extension,
            description: res.description.slice(0, 200),
            urls: res.urls[1].url,
        }
    }

    const _comicsListItem = (res) => {
        if (!res.description) {
            res.description = "Sorry, no information"
        }
        return {
            id: res.id,
            comi: res.comics.items.slice(0, 10),
            name: res.name,
            thumbnail: res.thumbnail.path + "." + res.thumbnail.extension,
            description: res.description.slice(0, 200),
            // comiclink: res.urls[2].url,
            wiki: res.urls[1].url,

        }
    }




    return { getAllCharacters, getCharacter, getCharacterComics }

}
export default marvelServis