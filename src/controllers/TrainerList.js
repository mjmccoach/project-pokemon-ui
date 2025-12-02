import React from "react";
import axios from "axios";

class TrainerList extends React.Component {
    constructor() {
        super();
        this.state = {
            trainers: []
        }
    }

    componentDidMount() {
        axios('http://localhost:8081/all')
            .then((data) => {this.setState({trainers: data})
                });
    }

    render() {
        return <h3>TrainerList Component</h3>
    }
}

export default TrainerList;