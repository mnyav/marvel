import './randomChar.scss';

import thor from '../../resources/img/thor.jpeg';
import mjolnir from '../../resources/img/mjolnir.png';

import MarvelServis from "../../services/marvelServis"

import { useState, useEffect } from 'react';



const RandomChar = () => {
    const [state, setState] = useState({});

    const { getCharacter } = MarvelServis()


    const updateChar = () => {
        const maxId = Math.floor(Math.random() * (1011400 - 1011500) + 1011400)
        getCharacter(maxId)
            .then(res => setState(res))
    }

    useEffect(() => {
        updateChar()
    }, [])


    const { id, name, description, thumbnail, urls } = state;

    const x = { objectFit: "fill" }
    const y = { objectFit: "cover" }




    const style = thumbnail === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg" ? x : y
    return (
        <div className="randomchar">
            <div className="randomchar__block">
                <img src={thumbnail} alt="Random character" style={style} className="randomchar__img" />
                <div className="randomchar__info">
                    <p className="randomchar__name">{name}</p>
                    <p className="randomchar__descr">
                        {description}
                    </p>
                    <div className="randomchar__btns">
                        <a href={urls} className="button button__main">
                            <div className="inner">homepage</div>
                        </a>
                        <a href="#" className="button button__secondary">
                            <div className="inner">Wiki</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="randomchar__static">
                <p className="randomchar__title">
                    Random character for today!<br />
                    Do you want to get to know him better?
                </p>
                <p className="randomchar__title">
                    Or choose another one
                </p>
                <button onClick={updateChar} className="button button__main">
                    <div className="inner">try it</div>
                </button>
                <img src={mjolnir} alt="mjolnir" className="randomchar__decoration" />
            </div>
        </div>
    )
}

export default RandomChar;