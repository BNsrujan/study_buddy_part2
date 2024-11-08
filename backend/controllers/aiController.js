const aiService = require('../services/aiService');

exports.summarizeText = async (req, res) => {
    try {
        const { text } = req.body;
        const summary = await aiService.summarizeText(text);
        res.json({ summary });
    } catch (error) {
        res.status(500).json({ error: 'Error summarizing text' });
    }
};

exports.extractKeyPoints = async (req, res) => {
    try {
        const { text } = req.body;
        const keyPoints = await aiService.extractKeyPoints(text);
        res.json({ keyPoints });
    } catch (error) {
        res.status(500).json({ error: 'Error extracting key points' });
    }
};

exports.generateMCQs = async (req, res) => {
    try {
        const { text } = req.body;
        const mcqs = await aiService.generateMCQs(text);
        res.json({ mcqs });
    } catch (error) {
        res.status(500).json({ error: 'Error generating MCQs' });
    }
};
