import React from 'react';

import './Sidedraw.css';

const menu = (props) => {
    const classes = ["Menu", props.isShowing ? 'Menu-close' : null].join(' ');
    
    return (
        <div className={classes} onClick = {props.clicked}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}

export default menu;