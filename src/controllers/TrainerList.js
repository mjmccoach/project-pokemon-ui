import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";


class TrainerList extends React.Component {
    constructor() {
        super();
        this.state = {
            trainers: [],
            loaded: false
        }
    }

    componentDidMount() {
        axios('http://localhost:8081/all')
            .then((response) => {
                this.setState({trainers: response.data, loaded: true})
                });
    }

    render() {
        return <div className="block">{this.state.trainers.map((trainer) => 
                    <div className="card">
                        <Link to={`/account/${trainer.id}`}>
                            {trainer.name}
                        </Link>
                    </div>)}
               </div>
    }
}

export default TrainerList;