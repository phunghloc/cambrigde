import React from 'react';

import './Detail.css';

export default function detail(props) {
    return (
        <div className="Detail px-4 pt-5 pb-2">
            <p className="ml-2">{props.question.detail}</p>
        </div>
    );
}