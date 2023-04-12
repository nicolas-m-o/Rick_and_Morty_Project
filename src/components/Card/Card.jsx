import style from './Card.module.css'

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

         <h1>{name}</h1>
         <h3>{status}</h3>
         <h3>{species}</h3>
         <h3>{gender}</h3>
         <h3>{origin}</h3>

         </div>
      </div>
   );
}
