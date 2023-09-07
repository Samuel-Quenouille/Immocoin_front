import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

export default function PropertiesList() {
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
      {properties.map((property) => (
        <div className="list-properties" key={property.id}>
          <h2>{property.title}</h2>
          <p>{property.description}</p>
          <p>{property.price}</p>
          <p>{property.id}</p>
          {console.log(property.id)}
          <Link to={`/annonces/${property.id}`}>Lire l'annonce</Link>
          
        </div>
      ))}
    </div>
  );
}

