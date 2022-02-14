import './charInfo.scss';
import thor from '../../resources/img/thor.jpeg';
import { useEffect, useState } from "react"
import marvelServis from '../../services/marvelServis';

const CharInfo = ({ changeID }) => {
    const { getCharacterComics } = marvelServis()

    const [comics, setComics] = useState([]);
    const [com, setComi] = useState([]);



    const updateComics = () => {
        getCharacterComics(changeID)
            .then(res => {
                setComics(res)
                setComi(res.comi)
            })
    }

    useEffect(() => {
        updateComics()
    }, [changeID]);
    function view(comics) {
        const comicsList = comics.map((item, i) => {
            return (
                <li key={Math.floor(Math.random() * 191900)} className="char__comics-item">
                    {item.name}
                </li>
            )
        })
        return (
            <ul className="char__comics-list">
                {comicsList}
            </ul>
        )
    }

    const content = view(com)
    const { thumbnail, description, urls, name, wiki, } = comics
    return (
        <div className="char__info">
            <div className="char__basics">
                <img src={thumbnail} alt="abyss" />
                <div>
                    <div className="char__info-name">{name}</div>
                    <div className="char__btns">
                        <a href={urls} className="button button__main">
                            <div className="inner">homepage</div>
                        </a>
                        <a href={wiki} className="button button__secondary">
                            <div className="inner">Wiki</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="char__descr">
                {description}
            </div>
            <div className="char__comics">Comics:</div>
            {content}
        </div>
    )
}




export default CharInfo;