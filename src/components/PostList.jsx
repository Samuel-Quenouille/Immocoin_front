import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

export default function PostList() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchPosts = () => {
      fetch("http://localhost:3000/properties", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((responseData) => {
          setProperties(responseData);
          console.log(responseData[2].title);
        });
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h2 className="text-center">Liste des annonces :</h2>
      {properties.map((data) => (
        <div className="list-properties" key={data.id}>
          <h2>{data.title}</h2>
          <p>{data.description}</p>
          <p>{data.price}</p>
          <Link to={`/${data.slug}`}>Lire l'annonce</Link>
        </div>
      ))}
    </div>
  );
}

