import { useAtom } from 'jotai';
import { userAtom } from '../atom';
import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

export default function BottomHeader() {
  const [user] = useAtom(userAtom)

  return (
    <div className="bottomheader p-5">
      <div className="row justify-content-center align-items-center text-center">
        <h1 className=''>Un bien à vendre ?</h1>
        <p className=''>Ça se passe par ici :</p>

        <button className="abtn yellowbtn">
          {user.isLoggedIn ? (
            <>
              <Link to="/createpost" className="btn">
                Publier mon annonce
              </Link>
            </>
          ) : (
            <>
            </>
          )}
        </button> 
      </div>
    </div>  
  );
}