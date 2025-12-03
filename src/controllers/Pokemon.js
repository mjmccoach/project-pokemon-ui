import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Pokemon extends React.Component {
    constructor() {
        super();
        this.state = {
            pokemonBases : [],
            loaded: false
        }
    }

    componentDidMount() {
         axios('http://localhost:8082/pokemon/base/all')
            .then((response) => {
                this.setState({pokemonBases: response.data, loaded: true})
                });
    }

    render() {
        return (
            <div>
                <h3>Pokedex</h3>
                <div className="block">{this.state.pokemonBases.map((pokemon) => 
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
}

export default Pokemon;