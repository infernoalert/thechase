import React, { useState, useEffect } from 'react';
import './App.css';
import questions from './questions.json';

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const handleNext = () => {
    setShowAnswer(false);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    setShowAnswer(false);
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Question {currentQuestion.number}</h1>
        <div className="question-container">
          <p className="category">Category: {currentQuestion.category}</p>
          <p className="question">{currentQuestion.question}</p>
          
          <div className="options">
            {currentQuestion.options.map((option, index) => (
              <button 
                key={index} 
                className="option-button"
                onClick={() => setShowAnswer(true)}
              >
                {option}
              </button>
            ))}
          </div>

          {showAnswer && (
            <div className="answer">
              <p>Correct Answer: {currentQuestion.options[1]}</p>
            </div>
          )}
        </div>

        <div className="navigation-buttons">
          <button 
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
          >
            Previous
          </button>
          <button 
            onClick={handleNext}
            disabled={currentQuestionIndex === questions.length - 1}
          >
            Next
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
