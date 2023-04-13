import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import style from './Detail.module.css'

const URL_BASE = "https://be-a-rym.up.railway.app/api/character";
const API_KEY = "6e4b75b56fca.32d5dd7f1f5ade63f9ba";


const Detail = () => {
    const { id } = useParams()
    const [character, setCharacter] = useState({})

    useEffect(() => {
        axios(`${URL_BASE}/${id}?key=${API_KEY}`)
        .then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return(

    <div className={style.contenedor}>


        <div className={style.card}>

            <div className={style.front}>
                <img src={character?.image} alt={character.name} />
                <h3>{character?.name}</h3>
            </div>
        </div>

        <div className={style.box}>
                <h2>{character?.name}</h2>
                <h2>{character?.status}</h2>
                <h2>{character?.species}</h2>
                <h2>{character?.gender}</h2>
                <h2>{character?.origin?.name}</h2>
                
        </div>

           
           

    </div>
    )
}

export default Detail;



