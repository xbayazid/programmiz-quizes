import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestions from '../QuizQuestions/QuizQuestions';

const QuizDetails = () => {
    const quizData = useLoaderData();
    const questions = quizData.data.questions;
    return (
        <div>
            <h1>React</h1>
            <p>Total Question: {questions.length}</p>
            {
                questions.map(question => <QuizQuestions
                        key={question.id}
                        questions={question}
                ></QuizQuestions>)
            }
        </div>
    );
};

export default QuizDetails;