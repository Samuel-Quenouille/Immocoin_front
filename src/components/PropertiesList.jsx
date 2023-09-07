import React, { useEffect, useState, useRef } from 'react';
import {Link} from 'react-router-dom';

export default function PropertiesList() {
  const [properties, setProperties] = useState([]);
  const propertiesRef = useRef(null);

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

          if (propertiesRef.current) {
            propertiesRef.current.scrollIntoView({ behavior: "smooth" });
          }
        });
    };

    fetchPosts();
  }, []);

  return (
    <div ref={propertiesRef} className="properties-section">
      <h2 className="text-center">Liste des annonces :</h2>
      {properties.map((property) => (
        <div className="list-properties" key={property.id}>
          <h4>{property.title}</h4>
          <h2>{property.price} €</h2>
          <p>{property.city} - {property.zip_code}</p>
          <Link to={`/annonces/${property.id}`}>Lire l'annonce</Link>
          
        </div>
      ))}
    </div>
  );
}

