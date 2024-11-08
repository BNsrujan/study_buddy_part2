const aiService = require('../services/aiService');

exports.evaluateMCQ = async (req, res) => {
    try {
        const results = await aiService.runPythonScript('evaluation', JSON.stringify(req.body));
        res.json(JSON.parse(results));
    } catch (error) {
        res.status(500).json({ error: 'Error evaluating MCQs' });
    }
};

exports.evaluateAnswers = (req, res) => {
    const { userAnswers, correctAnswers } = req.body;
    const results = userAnswers.map((answer, index) => ({
        question: answer.question,
        correct: answer.selected === correctAnswers[index].correct,
        correctAnswer: correctAnswers[index].correct,
    }));
    res.json({ results });
};
