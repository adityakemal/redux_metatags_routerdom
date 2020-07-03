import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav>
               <Link to='/'>home</Link>
               <Link exact to='/profile'>profile</Link>
               <Link exact to='/all'>all data</Link>
            </nav>
        );
    }
}

export default Navbar;