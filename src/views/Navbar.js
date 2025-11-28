import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return <div className="navbar">
                <Link to ="/account"><p>Account</p></Link>
                <Link to ="/pokemon"><p>Pokemon</p></Link>
               </div>
    }
}

export default Navbar;