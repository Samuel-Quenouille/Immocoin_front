import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'

export default function Property() {

    const {propertyId} = useParams();
    const [property, setProperty] = useState('');


    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`http://localhost:3000/properties/${propertyId}`, {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            });

            console.log('Réponse de l\'API :', response);
            if (!response.ok) {
              console.error('Erreur lors de la récupération des données. Code d\'état HTTP :', response.status);
              throw new Error('Erreur lors de la récupération des données');
            }
    
            const responseData = await response.json();
            setProperty(responseData);
          } catch (error) {
            console.error('Erreur lors de la récupération des données :', error);
          }
        };
    
        fetchData();
      }, [propertyId]);
    
      if (!property) {
        return <div>Loading...</div>; // Affichez un message de chargement en attendant la récupération des données
      }

    return (
        <div className="properties">
            <h1>{property.title}</h1>
            <p dangerouslySetInnerHTML={{ __html: property.description }} />
        </div>
    )
}