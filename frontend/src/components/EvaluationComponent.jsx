import React, { useState, useEffect } from 'react';
import apiService from '../services/apiService';

const EvaluationComponent = ({ answers }) => {
    const [results, setResults] = useState([]);

    useEffect(() => {
        const evaluateAnswers = async () => {
            const response = await apiService.evaluateMCQ(answers);
            setResults(response.data.results);
        };
        evaluateAnswers();
    }, [answers]);

    return (
        <div>
            {results.map((result, index) => (
                <div key={index}>
                    <p>Question: {result.question}</p>
                    <p>Your Answer: {answers[index].selected}</p>
                    <p>Correct Answer: {result.correctAnswer}</p>
                    <p>{result.correct ? 'Correct' : 'Incorrect'}</p>
                </div>
            ))}
        </div>
    );
};

export default EvaluationComponent;
