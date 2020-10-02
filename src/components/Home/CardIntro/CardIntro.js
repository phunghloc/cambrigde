import React from 'react';
import { Button } from 'react-bootstrap';

import './CardIntro.css';
import img1 from '../../../assets/img/Homepage_400x175px_Image_Learner.jpg';
import img2 from '../../../assets/img/Homepage_400x175px_Image_Teacher.jpg';
import img3 from '../../../assets/img/Homepage_400x175px_Image_Organisation.jpg';

const cards = [
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

const cardIntro = () => {
    return (
        <div className="CardIntro pt-5">
            <div className="row justify-content-center text-center mb-5">
                <h2 className="col-md-8 col-sm-10">
                    We help people learn English and prove their skills to the world
                </h2>
            </div>
            <div className="Card-Container mb-2">
                {cards.map(card => {
                    return (
                        <div className="Card-Item bg-light rounded mb-4" key={card.title}>
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
        </div>
    );
}

export default cardIntro;