import React from 'react';
// import { Spin } from 'react-reveal';

import './CircleCard.css';
import CircleCardItem from './CircleCardItem';
import img1 from '../../../assets/img/circ1.jpg';
import img2 from '../../../assets/img/circ2.jpg';
import img3 from '../../../assets/img/circ3.jpg';

const cardList = [
    {
        img: img1,
        title: 'Write & Improve',
        border: 'border-info',
    },
    {
        img: img2,
        title: 'Quiz your English',
        border: 'border-warning',
    },
    {
        img: img3,
        title: 'Free English practice activities',
        border: 'border-primary',
    },
];

const circleCard = () => {
    return (
        <div className="CircleCard pt-5 text-center">
            <h2>Want to improve your English?</h2>
            <p className="py-3">Practice material and learning resources to help you improve your English.</p>
            <div className='CircleCard-div'>
                {cardList.map((card, index)=> {
                    return (
                        <CircleCardItem 
                            key = {card.title}
                            img = {card.img}
                            title = {card.title}
                            border = {card.border}
                            index = {index}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default circleCard;