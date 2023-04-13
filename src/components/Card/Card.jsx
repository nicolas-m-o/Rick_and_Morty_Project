import style from './Card.module.css'
import { Link } from 'react-router-dom';

export default function Card({id, name, status, species, gender, origin, image, onClose}) {
   return (
      <div className={style.card}>
        <div className={style.button}>

         <button onClick={()=> onClose(id)} >X</button>
        </div>

         <div className={style.coverCard}>

             <img src={image} alt='' />
         </div>
         <div className={style.text}>
         <Link to={`/detail/${id}`}>
             <h1>{name}</h1>
         </Link>
         <h3>{status}</h3>
         <h3>{species}</h3>
         <h3>{gender}</h3>
         <h3>{origin}</h3>

         </div>
      </div>
   );
}
