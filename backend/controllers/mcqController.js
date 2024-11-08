const aiService = require('../services/aiService');

exports.generateMCQs = (req, res) => {
    const { text } = req.body;
    aiService.generateMCQs(text)
        .then(mcqs => res.json({ mcqs }))
        .catch(error => res.status(500).json({ error: 'Error generating MCQs' }));
};
