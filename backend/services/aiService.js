const openai = require('openai');

exports.summarizeText = async (text) => {
    const response = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: `Summarize the following text:\n\n${text}`,
        max_tokens: 150,
    });
    return response.choices[0].text.trim();
};

exports.extractKeyPoints = async (text) => {
    const response = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: `Extract key points from the following text:\n\n${text}`,
        max_tokens: 100,
    });
    return response.choices[0].text.trim().split('\n');
};

exports.generateMCQs = async (text) => {
    const response = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: `Create multiple choice questions for the following text:\n\n${text}`,
        max_tokens: 200,
    });
    return JSON.parse(response.choices[0].text);
};
