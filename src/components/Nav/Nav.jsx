import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import style from "./Nav.module.css"

const Nav = ({onSearch}) => {
    return (

        <div className={style.container}>
            <button className={style.boton}>
                <Link to='/home'>Home</Link>
            </button>
            
            <button className={style.boton}>
                <Link to='/about' >About</Link>
            </button>
            <SearchBar onSearch={onSearch}/>

        </div>
    )
}

export default Nav;