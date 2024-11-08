import React, { useState } from 'react';
import apiService from '../services/apiService';

const FileUploadComponent = ({ onTextExtracted }) => {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('file', file);

        const response = await apiService.uploadFile(formData);
        onTextExtracted(response.data.text);
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload and Extract Text</button>
        </div>
    );
};

export default FileUploadComponent;
