import React from 'react';
import { Roll } from 'react-reveal';

const circleCardItem = (props) => {
    return (
        <div className='CircleCardItem my-5'>
            <Roll 
                left = {props.index === 0}
                right = {props.index === 2}
                bottom = {props.index === 1}
            >
                <img 
                    src={props.img} 
                    alt={props.title} 
                    className={"w-100 rounded-circle mb-4 " + props.border}
                />
            </Roll>
            <h4>{props.title}</h4>
        </div>
    );
}

export default circleCardItem;