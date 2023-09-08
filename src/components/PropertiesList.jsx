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
      <br></br>
      {properties.map((property) => (
        <div className="list-properties text-center" key={property.id}>
          <img src={property.imageUrl} alt={property.title} />
          <h2>{property.title}</h2>
          <h6>{property.city} - ({property.zip_code})</h6>
          <p className='mb-6'>{property.description}</p>
          <h5 className="price">Prix TTC : {property.price} €</h5>
          {console.log(property.id)}
          <br></br>
          <button className='greybtn abtn'>
            <Link className="btn" to={`/annonces/${property.id}`}>Lire l'annonce</Link>
          </button>
        </div>
      ))}
    </div>
  );
}

