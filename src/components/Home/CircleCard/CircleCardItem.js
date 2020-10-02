import React from 'react';

const circleCardItem = (props) => {
    return (
        <div className='CircleCardItem my-5'>
            <img 
                src={props.img} 
                alt={props.title} 
                className={"w-100 rounded-circle mb-4 " + props.border}
            />
            <h4>{props.title}</h4>
        </div>
    );
}

export default circleCardItem;