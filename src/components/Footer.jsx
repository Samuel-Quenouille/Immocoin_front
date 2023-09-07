import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

export default function Footer() {
    return (
      <div className="bottomheader p-5">
        <div className="row justify-content-center align-items-center text-center">
            <div className='col-3' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div>
                  <p><strong>Trouver mon bien</strong></p>
                      <Link to="/propertieslist" className="btn">
                      Voir l'intégralité des annonces
                      </Link>
                </div>        
                
                    <br></br>

                    <p><strong>Vendre mon bien</strong></p>
                    <Link to="/createpost" className="btn">
                    Publier mon annonce
                    </Link>

                    <br></br>

                    <Link to="/register" className="btn">
                    S'inscrire
                    </Link>

                    <br></br>

                    <Link to="/login" className="btn">
                    Se connecter
                    </Link>
            </div>

            <div className='col-3'>
                <Link to="#" className="btn">
                Politique de confidentialité
                </Link>

                <Link to="#" className="btn">
                Mentions légales
                </Link>

            </div>

            <div className='col-3'>
            <Link to="#" className="btn">
              A propos de Immocoin
            </Link>
            <br></br>
            <Link to="#" className="btn">
              La boîte à questions
            </Link>
            <br></br>
            <Link to="#" className="btn">
              Nous contacter
            </Link>
            </div>
  
        </div>
      </div>  
    );
  }