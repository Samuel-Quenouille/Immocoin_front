import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'

export default function Property() {

    const {propertySlug} = useParams();
    const [data, setData] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`http://localhost:3000/properties/${propertySlug}`, {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            });
    
            if (!response.ok) {
              throw new Error('Erreur lors de la récupération des données');
            }
    
            const responseData = await response.json();
            setData(responseData);
          } catch (error) {
            console.error('Erreur lors de la récupération des données :', error);
          }
        };
    
        fetchData();
      }, [propertySlug]);
    
      if (!data) {
        return <div>Loading...</div>; // Affichez un message de chargement en attendant la récupération des données
      }

    return (
        <div className="properties">
            <h1>{data.title}</h1>
            <p dangerouslySetInnerHTML={{ __html: data.description }} />
        </div>
    )
}