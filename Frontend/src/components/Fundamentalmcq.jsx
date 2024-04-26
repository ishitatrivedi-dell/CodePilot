import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../css/Fundamentalmcq.css'

function Fundamentalmcq({ isLoggedIn }) {
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/login');
        }
    }, [isLoggedIn, navigate]);

    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/v1/questions/show');
                setQuestions(response.data);
            } catch (error) {
                console.error('Error fetching questions:', error);
            }
        };

        fetchQuestions();
    }, []);

    const handleAnswerSelection = (answer) => {
        const currentQuestionData = questions[currentQuestion];
        if (answer === currentQuestionData.correctAnswer) {
            setScore(score + 1);
        }

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
                                    <button onClick={() => handleAnswerSelection(choice.text)}>
                                        {choice.text}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <p className="loading">Loading questions...</p>
                )}
            </div>
        </>
    )
}

export default Fundamentalmcq
