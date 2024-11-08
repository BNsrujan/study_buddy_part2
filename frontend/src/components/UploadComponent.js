import React, { useState } from 'react';
import apiService from '../services/apiService';

const UploadComponent = () => {
    const [file, setFile] = useState(null);

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('file', file);
        const response = await apiService.uploadFile(formData);
        console.log(response.data.text);
    };

    return (
        <>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            <button onClick={handleUpload}>Upload</button>
        </>
    );
};

export default UploadComponent;
