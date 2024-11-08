import axios from 'axios';

const apiService = {
    summarizeText: (text) => axios.post('/api/ai/summarize', { text }),
    extractKeyPoints: (text) => axios.post('/api/ai/keypoints', { text }),
    generateMCQs: (text) => axios.post('/api/ai/mcqs', { text }),
    evaluateMCQ: (answers) => axios.post('/api/evaluation/evaluate', { answers }),
};

export default apiService;
