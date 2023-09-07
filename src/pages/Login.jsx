import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useAtom } from 'jotai';
import { userAtom } from '../atom';
import Cookies from 'js-cookie';


export default function Login() {
  const [, setUser] = useAtom(userAtom);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    // Effectuer la requête fetch vers le backend Strapi pour l'authentification
    try {
      const response = await fetch('http://localhost:3000/users/sign_in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: {
            email: email,
            password: password
          }
        }),
      });

      if (response.ok) {
        console.log('Vous êtes connecté');
        const data = await response.json();

        Cookies.set('token', response.headers.get("Authorization"));
        Cookies.set('id', data.user.id);

        navigate('/')

        setUser({
          isLoggedIn: true,
        });
      } else {
        setError('Identifiants invalides');
      }
    } catch (error) {
      setError('Une erreur s\'est produite');
    }
  };

  return (
    <div className="form_signin container">
      <form onSubmit={handleLogin}>
        <h2>Se connecter</h2>
        {error && <p>{error}</p>}
        <div>
        <label htmlFor="email">Email :</label>
        <br></br>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        </div>
        <div>
        <label htmlFor="password">Mot de passe :</label>
        <br></br>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        </div>
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}