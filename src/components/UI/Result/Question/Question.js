import React from 'react';

import Detail from './Detail/Detail';
import Answer from './Answer/Answer';

const questions = (props) => {
    let result = (
            <Answer correct answer>
                {props.answer}
            </Answer>
    );
    
    if (props.data.correct !== props.answer) {
        result = (
            <> 
            <Answer correct >
                {props.data.correct}
            </Answer>
            <Answer answer>
                {props.answer}
            </Answer>
            </>
        );
    }

    return (
        <div className="Question rounded pb-4">
            <div className="Question-Number bg-primary rounded">
                <h5>Câu {props.order}</h5>
            </div>
            <Detail 
                question={props.data.question}
            />
            {result}
        </div>
    );
}

export default questions;