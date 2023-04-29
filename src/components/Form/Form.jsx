import style from './Form.module.css'
import { useState } from 'react';
import validation from '../Validation/Validation';


const Form = ({ login }) => {

    const [errors, setErrors] = useState({});

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event)=> {
        event.preventDefault() // hace que nuestra pagina no se recargando
        login(userData);
    }

    return (
    <section>
        <div  className={style.container}>

        <form className={style.form} onSubmit={handleSubmit}>

            <h1>Login</h1>
            <div className={style.inputBox}>
                <label htmlFor="email">Email: </label>
                <input type="text" name="email" placeholder="Ingrese su email" value={userData.email}  onChange={handleChange}/>
                {errors.email && <p>{errors.email}</p>}
            </div>
            <br />
            <div className={style.inputBox}>
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" placeholder="Ingrese su password" value={userData.password} onChange={handleChange} />
                {errors.password && <p>{errors.password}</p>}
            <br />
            </div>
            <button>Submit</button>
            
        </form>
        
        </div>
    </section>
    )
}

export default Form;