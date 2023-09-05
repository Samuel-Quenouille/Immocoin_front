import React, { useState } from 'react';
import { useAtom } from 'jotai';
import { userAtom } from '../atom';

export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [zip_code, setZipCode] = useState('');
  const [city, setCity] = useState('');
  const [user] = useAtom(userAtom);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.value);
  }

  const handleZipCodeChange = (event) => {
    setZipCode(event.target.value);
  }

  const handleCityChange = (event) => {
    setCity(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newPost = {
      property: {
        title: title,
        description: description,
        price: price,
        image: image,
        zip_code: zip_code,
        city: city,
        user_id: user.id,
      }
    };

    try {
      const response = await fetch('http://localhost:3000/properties', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify(newPost),
      });

      if (response.ok) {
        console.log('Votre annonce a été créée avec succès');
      } else {
        console.error("Erreur lors de la création de l'annonce");
      }
    } catch (error) {
      console.error("Erreur lors de la création de l'annonce :", error);
    }
  };

  return (
    <div>
      <h2>Création d'une annonce</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Titre :</label>
          <textarea
            id="title"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description :</label>
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
          />
        </div>
        <div>
          <label htmlFor="price">Prix :</label>
          <textarea
            id="price"
            value={price}
            onChange={handlePriceChange}
          />
        </div>
        <div>
          <label htmlFor="image">Image :</label>
          <textarea
            id="image"
            value={image}
            onChange={handleImageChange}
          />
        </div>
        <div>
          <label htmlFor="zip_code">Code Postal :</label>
          <textarea
            id="zip_code"
            value={zip_code}
            onChange={handleZipCodeChange}
          />
        </div>
        <div>
          <label htmlFor="city">Ville :</label>
          <textarea
            id="city"
            value={city}
            onChange={handleCityChange}
          />
        </div>
        <button type="submit">Créer l'annonce</button>
      </form>
    </div>
  );
}
