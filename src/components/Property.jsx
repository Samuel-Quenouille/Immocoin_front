import { useAtom } from 'jotai';
import { userAtom } from '../atom';
import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import DeletePost from '../components/DeletePost';

export default function Property() {

  const {propertyId} = useParams();
  const [property, setProperty] = useState('');
  const [user] = useAtom(userAtom);

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

      const handleDelete = async (deletedPropertyId) => {
        // Mettez ici la logique de suppression de la propriété
        try {
          const response = await fetch(`http://localhost:3000/properties/${deletedPropertyId}`, {
            method: 'DELETE',
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          });
      
          if (response.ok) {
            console.log('Votre annonce a été supprimée avec succès');
            onDelete(propertyId);
            // Vous pouvez mettre à jour l'état ou rediriger l'utilisateur après la suppression
          } else {
            console.error("Erreur lors de la suppression de l'annonce");
          }
        } catch (error) {
          console.error("Erreur lors de la suppression de l'annonce :", error);
        }
      };
      
      if (!property) {
        return <div>Loading...</div>; // Affichez un message de chargement en attendant la récupération des données
      }

    return (
        <div className="properties">
            <h1>{property.title}</h1>
            <p dangerouslySetInnerHTML={{ __html: property.description }} />
            <DeletePost propertyId={propertyId} onDelete={handleDelete} property={property}/>
        </div>
    )
}