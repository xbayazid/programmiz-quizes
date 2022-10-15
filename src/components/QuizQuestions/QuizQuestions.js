import React, { useState } from 'react';
import Options from '../Options/Options';
import { EyeIcon } from "@heroicons/react/24/solid";
import './QuizQuestion.css';

const QuizQuestions = ({questions}) => {
       const {question, options, id, correctAnswer} = questions;
       const [disabled, setDisabled] = useState(false);
       const [answer, setAnswer] = useState([]);
       const checkAnswer = (value) =>{
        if(value === correctAnswer){
            alert('Yes you are right');
        }
        else{
            alert('No you are wrong');
        }
       }

       const showCorrectAnswer = () =>{
        setAnswer(correctAnswer);
        setDisabled(true);
       }

       return (
        <div className='quiz-card'>
            <div>
            <h3>{question}</h3>
            {
                options.map((option, idx) => <Options
                    key={idx}
                    option={option}
                    id={id}
                    checkAnswer={checkAnswer}
                ></Options>)
            }
            <p className='correct-answer'>Correct Answer: {answer}</p>
            </div>
            <div>
                <button disabled={disabled} onClick={showCorrectAnswer}  className='eye-btn'>
                <EyeIcon className='eye-icon'></EyeIcon>
                </button>
            </div>
        </div>
      );
};

export default QuizQuestions;