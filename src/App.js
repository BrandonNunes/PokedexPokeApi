import Pokedex from "./Pokedex";
import SinglePokemon from "./SinglePokemon";
import './pokemon.css';


function App() {
  return (
    <div className="App">
        <SinglePokemon/>
        <Pokedex/>
        <footer className='footer'>
                  <img src='https://image.flaticon.com/icons/png/512/38/38462.png' width='100px' alt='controls'/>
                <img src='https://image.flaticon.com/icons/png/512/37/37434.png' width='100px' alt='controls2'/>
            </footer>
    </div>
  );
}

export default App;
