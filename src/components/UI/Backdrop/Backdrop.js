import React from 'react';

import './Backdrop.css';

const backdrop = (props) => {
    const classes = ["Backdrop", props.isShowing ? 'Backdrop-open' : 'Backdrop-close'].join(' ');

    return (
        <div 
            className={classes} 
            onClick = {props.clicked}
        >
        </div>
    );
}

export default backdrop;