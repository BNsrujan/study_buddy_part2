const express = require('express');
const aiController = require('../controllers/aiController');
const router = express.Router();

router.post('/summarize', aiController.summarizeText);
router.post('/keypoints', aiController.extractKeyPoints);
router.post('/mcqs', aiController.generateMCQs);

module.exports = router;
