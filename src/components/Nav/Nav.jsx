import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";
import style from "./Nav.module.css"

const Nav = ({onSearch}) => {
    return (

        <div className={style.container}>
            <button className={style.boton}>
                <NavLink to='/home'>Home</NavLink>
            </button>
            
            <button className={style.boton}>
                <NavLink to='/about' >About</NavLink>
            </button>
            <SearchBar onSearch={onSearch}/>

        </div>
    )
}

export default Nav;