import { useState, useEffect } from 'react'; 
import axios from "axios";
import { Link } from "react-router-dom";
import Preloader from '../views/Preloader';

function Pokemon () {

    const [pokemonBases, setPokemonBases] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
         axios('http://localhost:8082/pokemon/base/all')
            .then((response) => {
                setPokemonBases(response.data);
                setLoaded(true);
            });   
        }, []);
    
    if (!loaded) {
        return <Preloader />
    }

    return (
        <div>
            <h3>Pokedex</h3>
            <div className="block">{pokemonBases.map((pokemon) => 
                    <div className={`card ${pokemon.primaryType.toLowerCase()}`}>
                        <span>#{pokemon.id}</span>
                        <span>{pokemon.name}</span>
                        <span>{pokemon.primaryType.toLowerCase()}</span>
                        <Link to={`/pokemon/${pokemon.id}`}>
                            <button>details</button>
                        </Link>
                    </div>
            )}
            </div>
        </div>
    );
}

export default Pokemon;