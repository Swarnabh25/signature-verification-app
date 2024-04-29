// App.js

import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests
import './App.css';

function App() {
  // State to store the uploaded image
  const [image, setImage] = useState(null);

  // Function to handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  // Function to handle signature verification
  const verifySignature = async () => {
    if (!image) {
      alert('Please upload an image.');
      return;
    }

    try {
      // Create a form data object to send the image file
      const formData = new FormData();
      formData.append('image', image);

      // Make a POST request to the server endpoint
      const response = await axios.post('http://localhost:3000/verify', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      // Display the result
      console.log('Verification Result:', response.data);
      // Update the UI with the result
      document.querySelector('.result').innerText = response.data;
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Signature Verification</h1>
        <p>Upload an image to verify if the signature is genuine or forged.</p>
        {/* Input field for image upload */}
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        {/* Button to trigger signature verification */}
        <button onClick={verifySignature}>Verify Signature</button>
        {/* Spot where the result will be shown */}
        <div className="result"></div>
        {/* Display the uploaded image */}
        {image && (
          <div>
            <h3>Uploaded Image:</h3>
            <img src={URL.createObjectURL(image)} alt="Uploaded" style={{ maxWidth: '35%', marginBottom: '20px' }} />
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
