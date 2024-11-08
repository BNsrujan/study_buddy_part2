const express = require('express');
const router = express.Router();
const evaluationController = require('../controllers/evaluationController');

router.post('/evaluate', evaluationController.evaluateAnswers);

module.exports = router;
