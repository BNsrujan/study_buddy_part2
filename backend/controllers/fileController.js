const multer = require('multer');
const path = require('path');
const aiService = require('../services/aiService');

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({ storage });

exports.uploadFile = (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'File upload failed' });
    }

    // Assuming the AI Service handles text extraction
    aiService.extractTextFromPDF(req.file.path)
        .then(text => res.json({ text }))
        .catch(error => res.status(500).json({ error: 'Error extracting text from file' }));
};

module.exports = { upload };
