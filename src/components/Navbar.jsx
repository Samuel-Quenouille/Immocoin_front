import {Link} from 'react-router-dom';
import Logout from '../components/Logout';

export default function Navbar() {

    return (
        <nav>
            <div className="navbar">
                <div className="links">
                <Link to="/">Home</Link>
                <Link to="/register">Créer un compte</Link>
                <Link to="/login">Se connecter</Link>
                </div>
                <Logout />
            </div>
        </nav>
    )
}