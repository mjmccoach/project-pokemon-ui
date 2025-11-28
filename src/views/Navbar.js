import React from 'react';
import Account from '../controllers/Account.js';
import Pokemon from '../controllers/Pokemon.js';

class Navbar extends React.Component {
    render() {
        return <div className="navbar">
                <Account />
                <Pokemon />
               </div>
    }
}

export default Navbar;