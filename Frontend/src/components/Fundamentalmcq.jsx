import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import '../css/Fundamentalmcq.css';

function Fundamentalmcq() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const type = queryParams.get('type');

  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        let response;
        if (type === 'Mix Type') {
          response = await axios.get('api/v1/questions/show');
        } else {
          response = await axios.get(`api/v1/questions/show/category?category=${type}`);
        }
        if (response.data.length === 0) {
          console.log(`No questions found for category ${type}`);
          setQuestions([]);
        } else {
          setQuestions(response.data);
        }
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };
    fetchQuestions();
  }, [type]);

  const handleAnswerSelection = (choiceValue) => {
    const currentQuestionData = questions[currentQuestion];
    const correctChoiceValue = currentQuestionData.choices.find((choice) => choice.value === true).value;
    setSelectedChoice(choiceValue);
    if (choiceValue === correctChoiceValue) {
      setScore(score + 1);
      setShowCorrectAnswer(false);
    } else {
      setShowCorrectAnswer(true);
    }
  };

  const handleNextQuestion = () => {
    setSelectedChoice(null);
    setShowCorrectAnswer(false);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      // Quiz has ended, display final score
      alert(`Quiz has ended. Your final score is ${score} out of ${questions.length}`);
    }
  };

  return (
    <>
      <div id="quiz-container">
        {questions.length > 0 ? (
          <div>
            <h2>Question {currentQuestion + 1}</h2>
            <p className="question">{questions[currentQuestion].question}</p>
            <ul className="choices">
              {questions[currentQuestion].choices.map((choice, index) => (
                <li key={index}>
                  <button
                    style={{
                      backgroundColor: selectedChoice === choice.value ? (choice.value ? '#4CAF50' : '#F44336') : '',
                      color: selectedChoice === choice.value ? 'white' : '',
                    }}
                    onClick={() => handleAnswerSelection(choice.value)}
                  >
                    {choice.text}
                  </button>
                </li>
              ))}
            </ul>
            {showCorrectAnswer && (
              <p>
                Correct Answer:{' '}
                {questions[currentQuestion].choices.find((choice) => choice.value === true).text}
              </p>
            )}
            <button onClick={handleNextQuestion}>Next Question</button>
          </div>
        ) : (
          <p className="loading">Loading questions...</p>
        )}
      </div>
    </>
  );
}

export default Fundamentalmcq;