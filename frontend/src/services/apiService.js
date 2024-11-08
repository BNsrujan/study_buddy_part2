import axios from 'axios';

const apiService = {
    uploadFile: (formData) => axios.post('/files/upload', formData, { headers: { 'Content-Type': 'multipart/form-data' } }),
    summarizeText: (text) => axios.post('/ai/summarize', { text }),
    extractKeyPoints: (text) => axios.post('/ai/keypoints', { text }),
    generateMCQs: (text) => axios.post('/ai/mcqs', { text }),
    evaluateMCQ: (answers) => axios.post('/evaluation/evaluate', answers),
};

export default apiService;
