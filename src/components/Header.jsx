import React from 'react';
import { Link } from 'react-router-dom';
import header_immocoin from '../assets/header_immocoin.jpg';
import '../index.css';

export default function Header() {

  return (
    <div className="img-header-container">
      <div className="img-header-content">
        <div className="img-wrapper">
          <img src={header_immocoin} alt="Bienvenue sur le site d'Immocoin" className="img" />
          <div className="text-overlay">
            <div className='text-with-shadow'>
              <h1 className='titleheader'>Bienvenue chez vous !</h1>
              <p className='pb-2 textheader'>Trouvez votre cocon grâce à Immocoin et ses 100 000 nouvelles annonces par jour</p>
            </div>
            <button className='greybtn abtn'>
                <Link to="/" className="btn">
                Voir les annonces
                </Link>
            </button>    
          </div>
        </div>
      </div>
    </div>
  );
}