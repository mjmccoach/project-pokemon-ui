import { useParams } from "react-router";
import { useState, useEffect } from 'react'; 
import axios from "axios";
import Preloader from '../views/Preloader.js';

function Account() {
    const accountId = useParams()["id"];

    const [account, setAccount] = useState({});
    const [loaded, setLoaded] = useState(false);

    
    useEffect(() => {
        axios(`http://localhost:8081/trainer/${accountId}`)
            .then((response) => {
                setAccount(response.data);
                setLoaded(true);
                });
    });

    if (!loaded) {
        return <Preloader/>;
    }

    return (
        <>
            <h3>{account.name}</h3>
        </>  
    )
}

export default Account;