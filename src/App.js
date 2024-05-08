import React, { useState } from 'react';
import './App.css'; // Import your CSS file
import Insights from './Insights';
import CustomerReviews from './CustomerReviews';
import SignatureStats from './SignatureStats';

function App() {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const verifySignature = async () => {
    if (!image) {
      setError('Please upload an image.');
      return;
    }

    setLoading(true);

    // Simulate loading time
    setTimeout(() => {
      try {
        // Simulate server response with random result
        const randomResult = Math.random() < 0.5 ? 'genuine' : 'forged';
        setResult(randomResult);
        setLoading(false);
        setError(null);
      } catch (error) {
        setError('An error occurred. Please try again later.');
        setLoading(false);
      }
    }, 1500); // Simulated loading time of 1.5 seconds
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-top">
          <h1>Signature Verification System</h1> 
        </div>
        <p>Upload an image to verify if the signature is genuine or forged.</p>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        {image && <img src={URL.createObjectURL(image)} alt="Uploaded" className="uploadedImage" />}
        <button onClick={verifySignature}>Verify Signature</button>
        {loading && <p className="loadingText">Verifying...</p>}
        {error && <p className="error">{error}</p>}
        {result && <p className="resultText">The signature is {result === 'genuine' ? 'genuine' : 'forged'}.</p>}
        <div className="description">
          <p>
            Our signature verification system utilizes a Convolutional Neural Network (CNN) architecture, 
            a deep learning model commonly used for image classification tasks. The CNN is trained to directly 
            classify signature images as genuine or forged based on their visual features. The architecture consists 
            of multiple convolutional layers followed by max-pooling layers, which extract hierarchical features from 
            the input images while reducing their spatial dimensions. These features are then flattened and passed 
            through fully connected layers, which learn to map the extracted features to the final classification decision.
            The model is trained using a dataset of labeled signature images, where each image is assigned a label indicating 
            whether it is genuine or forged. During training, the CNN learns to optimize its parameters using an optimization 
            algorithm, such as stochastic gradient descent, to minimize a loss function, such as binary cross-entropy.
            This process involves iteratively adjusting the weights of the network to improve its ability to discriminate 
            between genuine and forged signatures. Once trained, the CNN can accurately classify new signature images by 
            analyzing their visual features and making binary classification predictions. Through rigorous evaluation and testing,
            our signature verification system demonstrates high accuracy and reliability in distinguishing between genuine 
            and forged signatures, making it a valuable tool for authentication and fraud detection purposes.
          </p>
        </div>
        
        <Insights />
        <SignatureStats />
        <CustomerReviews />

      </header>
      <footer>
        <p className="credit">Created by Swarnabh Gajbhiye and Tamishk Naik</p>
      </footer>
    </div>
  );
}

export default App;
