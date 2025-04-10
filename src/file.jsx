import React, { useState } from 'react';

import image from './assets/logo.svg';

function ImageToJson() {
  const [imageBase64, setImageBase64] = useState(null);
  const [imageJSON, setImageJSON] = useState(null);

  // Função para lidar com o upload da imagem e conversão para Base64
  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    if (!file) {
      alert(image);
      return;
    }

    const reader = new FileReader();

    reader.onloadend = () => {
      // A string Base64 começa após a vírgula, então pegamos a parte após a vírgula
      const base64String = reader.result.split(',')[1];
      setImageBase64(base64String);

      // Armazenamos a imagem em um objeto JSON
      const imageJSON = {
        image: base64String,
      };
      setImageJSON(imageJSON);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div>
      <h1>Converter Imagem para JSON</h1>
      <input type="file" onChange={handleImageUpload} />
      
      {imageJSON && (
        <div>
          <h2>Imagem Convertida para JSON:</h2>
          <pre>{JSON.stringify(imageJSON, null, 2)}</pre>
        </div>
      )}

      {imageBase64 && (
        <div>
          <h2>Imagem em Base64:</h2>
          <img src={`data:image/png;base64,${imageBase64}`} alt="Imagem carregada" />
        </div>
      )}
    </div>
  );
}

export default ImageToJson;
