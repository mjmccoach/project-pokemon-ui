import React from 'react';
import Account from '../controllers/Account.js'

class Navbar extends React.Component {
    render() {
        return <div className="navbar">
                <Account />
                <h3>Pokemon</h3>
               </div>
    }
}

export default Navbar;