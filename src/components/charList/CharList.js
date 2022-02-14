import './charList.scss';
import abyss from '../../resources/img/abyss.jpg';
import marvelServis from '../../services/marvelServis';
import { useEffect, useState } from 'react';
const CharList = ({ seacrchId }) => {
    const [newCharList, setNewCharList] = useState([]);

    const { getAllCharacters, getCharacterComics } = marvelServis();

    const [offset, setOffset] = useState(210);

    const updateCharList = () => {
        getAllCharacters(offset)
            .then(res => {
                setNewCharList([...newCharList, ...res])

            })


    }

    const addChar = () => {
        console.log("1");
        setOffset(offset + 9)

    }

    useEffect(() => {
        updateCharList()
    }, [offset]);




    function renderCharacters(state) {
        const allCharList = state.map((item, i) => {
            return (
                <li onClick={() => seacrchId(item.id)} key={item.id + i} className="char__item">
                    <img src={item.thumbnail} alt="abyss" />
                    <div className="char__name">"{item.name}"</div>
                </li>

            )
        })
        return (
            <ul className="char__grid" >
                {allCharList}
            </ul >
        )
    }


    const content = renderCharacters(newCharList)
    return (
        <div className="char__list">
            {content}
            <button onClick={addChar} className="button button__main button__long">
                <div className="inner">load more</div>
            </button>
        </div>
    )
}



export default CharList;