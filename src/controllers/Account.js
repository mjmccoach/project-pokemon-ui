import { useParams } from "react-router";
import { useState, useEffect } from 'react'; 
import axios from "axios";

function Account() {
    const accountId = useParams()["id"];

    const [account, setAccount] = useState({});
    const [loaded, setLoaded] = useState(false);

    
    console.log("AccountId ", accountId);
    useEffect(() => {
        axios(`http://localhost:8081/${accountId}`)
            .then((response) => {
                setAccount(response.data);
                setLoaded(true);
                });
    });

    return (
        
        <>
            {loaded && (<h3>Account Component</h3>)}
        </>  
    )
}

export default Account;