const aiService = require('../services/aiService');

exports.summarizeText = async (req, res) => {
    try {
        const summary = await aiService.runPythonScript('summarization', req.body.text);
        res.json({ summary });
    } catch (error) {
        res.status(500).json({ error: 'Error summarizing text' });
    }
};

exports.extractKeyPoints = async (req, res) => {
    try {
        const keyPoints = await aiService.runPythonScript('key_points', req.body.text);
        res.json({ keyPoints: JSON.parse(keyPoints) });
    } catch (error) {
        res.status(500).json({ error: 'Error extracting key points' });
    }
};


exports.generateMCQs = async (req, res) => {
    try {
        const mcqs = await aiService.runPythonScript('mcq_generator', req.body.text);
        res.json({ mcqs: JSON.parse(mcqs) });
    } catch (error) {
        res.status(500).json({ error: 'Error generating MCQs' });
    }
};
