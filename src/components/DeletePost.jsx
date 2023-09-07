import React, { useState } from 'react';
import { useAtom } from 'jotai';
import { userAtom } from '../atom';

export default function DeletePost({propertyId, onDelete, property}) {
    const [user] = useAtom(userAtom);
    
    const handleDelete = async () => {
        try {
            const response = await fetch(`http://localhost:3000/properties/${propertyId}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            });

            if (response.ok) {
                console.log('Votre annonce a été supprimée avec succès');
                onDelete(propertyId);
            } else {
                console.error("Erreur lors de la suppression de l'annonce");
            } 
            
        }   catch (error) {
            console.error("Erreur lors de la suppression de l'annonce :", error);
        }
    };

    return (
        <div>
            <button onClick={handleDelete}>Supprimer l'annonce</button>
        </div>
    )
};


