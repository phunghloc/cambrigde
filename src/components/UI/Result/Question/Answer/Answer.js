import React from 'react';

import './Answer.css';

export default function Answer(props) {
    const classes = props.correct ? 'success' : 'danger';
    return (
        <div className="Answer-Big">
            <p className={`text-${classes} mb-0 ${props.correct ? null : 'mt-4'}`}>
                {props.correct ? 'Correct' : 'Incorrect'}
                {props.answer? '(Your Answer)' : null}
            </p>
            <div 
                className={`Answer border-${classes} text-${classes}`}
                onClick={() => props.clicked(props.index, props.children)}
            >
                <p>{props.children}</p>
                <div className="Answer-Big-inner">
                    <p>{props.correct ? '✔' : 'X'}</p>
                </div>
            </div>
        </div>
    );
}