import React, { useState, useEffect } from 'react';
import apiService from '../services/apiService';

const MCQComponent = ({ text, onAnswersUpdate }) => {
    const [mcqs, setMcqs] = useState([]);
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        const fetchMCQs = async () => {
            const response = await apiService.generateMCQs(text);
            setMcqs(response.data.mcqs);
        };
        fetchMCQs();
    }, [text]);

    const handleAnswerChange = (index, option) => {
        const newAnswers = [...answers];
        newAnswers[index] = { question: mcqs[index].question, selected: option };
        setAnswers(newAnswers);
        onAnswersUpdate(newAnswers);
    };

    return (
        <div>
            {mcqs.map((mcq, index) => (
                <div key={index}>
                    <p>{mcq.question}</p>
                    {mcq.options.map((option, i) => (
                        <button
                            key={i}
                            onClick={() => handleAnswerChange(index, option)}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default MCQComponent;
