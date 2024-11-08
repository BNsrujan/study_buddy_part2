import React, { useState, useEffect } from 'react';
import apiService from '../services/apiService';

const KeyPointsComponent = ({ text }) => {
    const [keyPoints, setKeyPoints] = useState([]);

    useEffect(() => {
        const fetchKeyPoints = async () => {
            const response = await apiService.extractKeyPoints(text);
            setKeyPoints(response.data.keyPoints);
        };
        fetchKeyPoints();
    }, [text]);

    return (
        <div>
            {keyPoints.map((point, index) => (
                <li key={index}>{point}</li>
            ))}
        </div>
    );
};

export default KeyPointsComponent;
