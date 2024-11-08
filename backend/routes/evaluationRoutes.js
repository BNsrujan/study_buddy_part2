const express = require('express');
const evaluationController = require('../controllers/evaluationController');
const router = express.Router();

router.post('/evaluate', evaluationController.evaluateAnswers);

module.exports = router;
