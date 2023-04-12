import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import { useState } from 'react';
import axios from 'axios';




const example = {
   id: 1,
   name: 'Rick Sanchez',
   status: 'Alive',
   species: 'Human',
   gender: 'Male',
   origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1',
   },
   image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
};

const URL_BASE = "https://be-a-rym.up.railway.app/api/character";
const API_KEY = "6e4b75b56fca.32d5dd7f1f5ade63f9ba";

function App() {

const [characters, setCharacters] = useState([]);

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
   const charactersFiltered = characters.filter(character => character.id !== Number(id));

   setCharacters(charactersFiltered)

}



   return (

      <div className='App'>
<nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Characters</a></li>
         <Nav onSearch = {onSearch}/>
      </ul>
    </nav>
         <Cards characters={characters}  onClose={onClose} />
       
      </div>
   );
}

export default App;
