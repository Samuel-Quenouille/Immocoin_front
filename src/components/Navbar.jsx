import { Link } from 'react-router-dom';
import Logout from '../components/Logout';
import '../index.css'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg p-2 mt-2">
      <div className="container-fluid navbar">

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">
                Se créer un compte
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Se connecter
              </Link>
            </li>
          </ul>
        </div>
        <Logout />
      </div>
    </nav>
  );
}





