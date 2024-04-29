const express = require('express');
const multer = require('multer');
const tf = require('@tensorflow/tfjs-node');

const app = express();

// Load the TensorFlow model
const modelPath = '/Users/swarnabh./Desktop/signature-verification-app/backend/signature_verification_model.h5';
let model;

async function loadModel() {
    model = await tf.loadLayersModel(`file://${modelPath}`);
    console.log('Model loaded successfully');
}

loadModel();

// Multer middleware to handle file uploads
const upload = multer({ dest: 'uploads/' });

// Endpoint for signature verification
app.post('/verify', upload.single('image'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No image uploaded' });
        }
        
        // Preprocess the image
        const img = await tf.node.decodeImage(req.file.buffer);
        const imgResized = tf.image.resizeBilinear(img, [128, 128]);
        const imgNormalized = imgResized.div(255);

        // Perform prediction
        const prediction = model.predict(imgNormalized.reshape([1, 128, 128, 3]));
        const result = prediction.arraySync()[0][0] > 0.5 ? 'genuine' : 'forged';
        
        return res.json({ prediction: result });
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
