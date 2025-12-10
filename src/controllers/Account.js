import { useParams } from "react-router";
import { useState, useEffect } from 'react'; 
import axios from "axios";
import Preloader from '../views/Preloader.js';

function Account() {
    const accountId = useParams()["id"];

    const [account, setAccount] = useState({});
    const [loaded, setLoaded] = useState(false);
    const [trainerPokemon, setTrainerPokemon] = useState([]);

    useEffect(() => {
        axios(`http://localhost:8081/trainer/${accountId}`)
            .then((response) => {
                setAccount(response.data);
                });

        axios(`http://localhost:8082/trainers/pokemon/trainer/${accountId}`)
            .then((pokemonResponse) => {
                setTrainerPokemon(pokemonResponse.data);
                setLoaded(true);
                });
    }, []);

    if (!loaded) {
        return <Preloader/>;
    }

    return (
        <>
            <h3>{account.name}</h3>
            <h4>Pokemon</h4>
            <div className="block">{trainerPokemon.map((pokemon) => 
                        <div className={`card ${pokemon.pokemonBase.primaryType.toLowerCase()}`}>
                            <span>#{pokemon.id}</span>
                            <span>{pokemon.nickname ? pokemon.nickname : pokemon.pokemonBase.name}</span>
                            <span>Level: {pokemon.level}</span>
                            <span>{pokemon.pokemonBase.primaryType.toLowerCase()}</span>
                        </div>
            )}
            </div>
        </>  
    )
}

export default Account;