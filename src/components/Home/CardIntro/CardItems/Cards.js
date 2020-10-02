import React from 'react';
import { Button } from 'react-bootstrap';

import img1 from '../../../../assets/img/Homepage_400x175px_Image_Learner.jpg';
import img2 from '../../../../assets/img/Homepage_400x175px_Image_Teacher.jpg';
import img3 from '../../../../assets/img/Homepage_400x175px_Image_Organisation.jpg';

const cardsList = [
    {
        img: img1,
        border: 'border-primary',
        title: 'Support for learners',
        detail: 'Free activities and advice if you\'re preparing for one of our exams or want to improve your English.'
    },
    {
        img: img2,
        border: 'border-danger',
        title: 'Support for teachers',
        detail: 'Resources to help you teach English online and support your learners prepare for their exam.',
    },
    {
        img: img3,
        border: 'border-warning',
        title: 'Support for oganisations',
        detail: 'Effective English language testing for your organisation, fearturing test-from-home software and learning solutions.'
    }
];

const cards = () => {
    return (
        <div className="Card-Container mb-2">
            {cardsList.map(card => {
                return (
                    <div className="Card-Item rounded mb-4" key = {card.border}>
                        <div className={"Card-title w-100 pl-2 pt-2 " + card.border}>
                            <h3>{card.title}</h3>
                        </div>
                        <img src={card.img} alt={card.title} className="w-100 my-2"/>
                        <p className="my-2"> {card.detail} </p>
                        <div className='d-flex my-4'>
                            <Button className='btn-dark mx-auto' >Find out more</Button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default cards;