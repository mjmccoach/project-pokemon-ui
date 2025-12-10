import { useState, useEffect } from 'react'; 
import axios from "axios";
import { Link } from "react-router-dom";
import Preloader from '../views/Preloader.js';

function TrainerList () {
       
    const [trainers, setTrainers] = useState([]);
    const [loaded, setLoaded] = useState(false);


    useEffect(() => {
        axios('http://localhost:8081/trainer/all')
            .then((response) => {
                setTrainers(response.data);
                setLoaded(true);
                });
    }, []);

    if (!loaded) {
        return <Preloader/>;
    }

    return (<div className="block">{trainers.map((trainer) => 
                <div className="card">
                    <Link to={`/account/${trainer.id}`}>
                        {trainer.name}
                    </Link>
                </div>)}
            </div>
    )
}

export default TrainerList;