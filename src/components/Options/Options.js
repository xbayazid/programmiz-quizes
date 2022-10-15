import React from 'react';
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import './Options.css';

const Options = ({option, checkAnswer}) => {
    return (
        <div>
            
        <button onClick={() => checkAnswer(option)} className='option-btn'><ArrowRightCircleIcon className='arrow-icon'></ArrowRightCircleIcon>
                {option}
                </button>
            
        </div>
    );
};

export default Options;