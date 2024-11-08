const multer = require('multer');
const pdfParse = require('pdf-parse');

const storage = multer.memoryStorage();
const upload = multer({ storage }).single('file');

exports.uploadFile = (req, res) => {
    upload(req, res, (err) => {
        if (err) return res.status(500).json({ error: 'File upload error' });

        pdfParse(req.file.buffer)
            .then(data => res.json({ text: data.text }))
            .catch(error => res.status(500).json({ error: 'PDF parsing error' }));
    });
};
