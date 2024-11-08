const express = require('express');
const router = express.Router();
const aiController = require('../controllers/aiController');

router.post('/summarize', aiController.summarizeText);
router.post('/keypoints', aiController.extractKeyPoints);
router.post('/mcqs', aiController.generateMCQs);

module.exports = router;
