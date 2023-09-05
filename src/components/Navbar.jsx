import {Link} from 'react-router-dom';
import { useState } from 'react';
import Logout from '../components/Logout';

export default function Navbar() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <nav>
            <div className="navbar">
                <div className="links">
                <Link to="/">Home</Link>
                <Link to="/register">Créer un compte</Link>
                <Link to="/login">Se connecter</Link>
                {isLoggedIn && <Link to="/createpost">Créer une annonce</Link>}
                </div>
            {isLoggedIn && <Logout />}
            </div>
        </nav>
    )
}