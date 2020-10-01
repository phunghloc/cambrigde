import React from 'react';

import './Question.css';
import Detail from './Detail/Detail';
import Answer from './Answer/Answer';

const questions = (props) => {
    return (
        <div className="Question rounded pb-4">
            <div className="Question-Number bg-primary rounded">
                <h5>Câu {props.order}</h5>
            </div>
            <Detail 
                question={props.data.question}
            />
            {props.data.answers.answers.map((answer, index) => {
                return (
                    <Answer
                        value = {answer}
                        key = {index}
                        clicked = {props.clicked}
                        index = {props.index}
                        onChoose = {props.onChoose === answer}
                    >
                        {answer}
                    </Answer>
                );
            })}
        </div>
    );
}

export default questions;