import React from 'react';
import { Link } from 'react-router-dom';
import "../css/navbar.css";


class Navbar extends React.Component {
    render() { 
        return (
        <>
            <ul id="navbar">
                <li>
                    <Link to="/clown">CLOWN</Link>
                </li>

                <li>
                    <Link to="/crud">CRUD</Link>
                </li>

                <li>
                    <Link to="/">EMOJICLICKER</Link>
                </li>
                <li>
                <Link to="/Prison">PRISON</Link>
                </li>
            </ul>
        </>
        );
    }
}
 
export default Navbar;