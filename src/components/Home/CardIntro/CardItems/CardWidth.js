import React from 'react';
import { Button } from 'react-bootstrap';
import { Bounce } from 'react-reveal';

import img1 from '../../../../assets/img/ap1.jpg';
import img2 from '../../../../assets/img/ap2.jpg';
import img3 from '../../../../assets/img/ap3.jpg';
import img4 from '../../../../assets/img/ap4.jpg';
import logo1 from '../../../../assets/img/ap1logo.png';
import logo2 from '../../../../assets/img/ap2logo.png';
import logo3 from '../../../../assets/img/ap3logo.png';
import logo4 from '../../../../assets/img/footer4.png';

const cardsList = [
    {
        img: img4,
        logo: logo4,
        title: 'Test Your English',
        detail: 'Try our quick, free online tests to find out what your level of English is, and which Cambridge English Qualification might be best for you. There are tests suited for every level, and at the end you will get recommendations on how to improve your English.',
        test: 'Test Your English',
    },
    {
        img: img1,
        logo: logo1,
        title: 'Your path to learning English, step by step',
        detail: 'Cambridge English Qualifications are in-depth exams that make learning English enjoyable, effective and rewarding. Our unique approach encourages continuous progression with a clear path to improve language skills. We have qualifications for schools, general and higher education, and business.',
    },
    {
        img: img2,
        logo: logo2,
        title: 'Together we inspire learners to go further',
        detail: 'Our range of free teaching resources, lesson plans and activities is designed to help you prepare your students for our exams and tests. We also have a range of teaching qualifications, courses and support to help you develop as a teacher.',
    },
    {
        img: img3,
        logo: logo3,
        title: 'The accurate English test with fast results',
        detail: 'Linguaskill is a quick and convenient online test to help higher education institutions and employers check the English levels of individuals and groups of candidates. It combines the latest AI technology with the reliability and quality you expect from Cambridge.',
    },
];

const cardWidth = () => {
    return (
        <div className="CardWidth">
            {cardsList.map((card, index) => {
                return (
                    <Bounce 
                        left={index % 2 === 0}
                        right={index % 2 !== 0} 
                        key={card.title} 
                    >
                        <div className="CardWidth-Item mb-5" key={card.title}>
                            <div className="CardWidth-Img" style={{backgroundImage: `url(${card.img})`}} ></div>
                            <div className="CardWidth-Info pt-5 px-5">
                                <img className="mb-4" src={card.logo} alt={card.title}/>
                                <h3>{card.title}</h3>
                                <p>{card.detail}</p>
                                <div className='d-flex mt-5'>
                                    <Button className='btn-dark mx-auto' >{card.test || 'Find out more'}</Button>
                                </div>
                            </div>
                        </div>
                    </Bounce>
                );
            })}
        </div>
    )
}

export default cardWidth;