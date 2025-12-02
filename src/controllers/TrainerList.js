import React from "react";
import axios from "axios";

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
                console.log("data ", response);
                this.setState({trainers: response.data, loaded: true})
                });
    }

    render() {
        return <div className="block">{this.state.trainers.map((trainer) => 
                    <div className="card">{trainer.name}</div>)}
               </div>
    }
}

export default TrainerList;