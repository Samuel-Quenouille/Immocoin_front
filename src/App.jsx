import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import { useAtom } from 'jotai';
import { userAtom } from './atom';
import Cookies from 'js-cookie';
import Navbar from "./components/Navbar"
import Property from "./components/Property"
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import CreatePost from './components/CreatePost';


export default function App() {
  const [user] = useAtom(userAtom);
  const [, setUser] = useAtom(userAtom);

  useEffect(() => {
    const token = Cookies.get('token');
    const id = Cookies.get('id');

    if (token) {
      setUser({
        id: id,
        isLoggedIn: true,
        token: token,
      });
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/annonces/:propertyId" element={<Property />} />
        </Routes>
      </BrowserRouter>
    </>
  )
    /*<div>
      <h1>Mon application</h1>
      {user.isLoggedIn ? (
        <div>
          <p>Bienvenue, Utilisateur n°{user.id} !</p>
          <PostList />
          <CreatePost />
          <Logout />
        </div>
      ) : (
        <div>
          <Register />
          <Login />
        </div>
      )}
    </div>*/
}
