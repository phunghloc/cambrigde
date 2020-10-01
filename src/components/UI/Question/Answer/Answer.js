import React from 'react';

import './Answer.css';

export default function Answer(props) {
    const onChooseClasses = props.onChoose ? 'border-primary text-primary' : null;
    const onChooseBtn = props.onChoose ? 'bg-primary' : null;
    return (
        <div 
            className={"Answer " + onChooseClasses}
            onClick={() => props.clicked(props.index, props.children)}
        >
            <p>{props.children}</p>
            <div className={"Answer-Radio " + onChooseClasses}>
                <div className={"Answer-Radio-inner " + onChooseBtn}></div>
            </div>
        </div>
    );
}