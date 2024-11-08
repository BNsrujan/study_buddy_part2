import React, { useState, useEffect } from 'react';
import apiService from '../services/apiService';

const SummaryComponent = ({ text }) => {
    const [summary, setSummary] = useState('');

    useEffect(() => {
        const fetchSummary = async () => {
            const response = await apiService.summarizeText(text);
            setSummary(response.data.summary);
        };
        fetchSummary();
    }, [text]);

    return <div>{summary && <p>{summary}</p>}</div>;
};

export default SummaryComponent;
