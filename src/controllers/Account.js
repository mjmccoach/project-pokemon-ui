import { useParams } from "react-router";
import { useState, useEffect } from 'react'; 
import axios from "axios";

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

    return (
        
        <>
            {loaded && (<h3>{account.name}</h3>)}
        </>  
    )
}

export default Account;