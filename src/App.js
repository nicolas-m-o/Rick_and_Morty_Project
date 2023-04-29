import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';



const URL_BASE = "https://be-a-rym.up.railway.app/api/character";
const API_KEY = "6e4b75b56fca.32d5dd7f1f5ade63f9ba";

const email = 'n.moyaorellana@gmail.com';
const password = '123asd';

function App() {


const location = useLocation();
const navigate = useNavigate();
const [characters, setCharacters] = useState([]);
const [access, setAccess] = useState(false)


const onSearch = (id) => {
   axios(`${URL_BASE}/${id}?key=${API_KEY}`)
   .then(({ data }) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   });
}

const onClose = (id) => {
   const charactersFiltered = characters.filter(character => character.id !== id);

   setCharacters(charactersFiltered);

}

const login = (userData) => {
   if(userData.email === email && userData.password === password){
      setAccess(true);
      navigate('/home');
   }
}

useEffect(()=> {
   !access && navigate('/')
}, [access, navigate]);


   return (

      <div className='App'>
         {
            location.pathname !== '/'
            ?<Nav onSearch = {onSearch}/>
            : null
         }
       
         
      <Routes>
        
         <Route path='/' element={ <Form login={login}/>}></Route>

         <Route path='/home' element={<Cards characters={characters}  onClose={onClose} />}></Route>

         <Route path='/about' element={<About/>} />

         <Route path='/detail/:id' element= {<Detail/>}></Route>

      </Routes>
           
         
       
      </div>
   );
}

export default App;
