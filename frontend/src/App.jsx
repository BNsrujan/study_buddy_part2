import React, { useState } from 'react';
import FileUploadComponent from './components/FileUploadComponent';
import SummaryComponent from './components/SummaryComponent';
import KeyPointsComponent from './components/KeyPointsComponent';
import MCQComponent from './components/MCQComponent';
import EvaluationComponent from './components/EvaluationComponent';

function App() {
  const [extractedText, setExtractedText] = useState('');
  const [answers, setAnswers] = useState([]);

  return (
    <div className="App">
      <h1>Study Buddy</h1>

      <FileUploadComponent onTextExtracted={setExtractedText} />

      {extractedText && (
        <>
          <h2>Summary</h2>
          <SummaryComponent text={extractedText} />

          <h2>Key Points</h2>
          <KeyPointsComponent text={extractedText} />

          <h2>MCQs</h2>
          <MCQComponent text={extractedText} onAnswersUpdate={setAnswers} />

          <h2>Evaluation</h2>
          <EvaluationComponent answers={answers} />
        </>
      )}
    </div>
  );
}

export default App;
