import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'

import './Footer.css';
import footer1 from '../../assets/img/footer1.png';
import footer2 from '../../assets/img/footer2.png';
import footer3 from '../../assets/img/footer3.png';
import footer4 from '../../assets/img/footer4.png';
import footer5 from '../../assets/img/footer5.png';

const footer = () => {
    return (
        <div className="Footer">
            <Container className="pt-4">
                <div className="Footer-Container">
                    <div className="Footer-Item d-flex flex-column">
                        <h4>On this site</h4>
                        <Link to='/' className="text-dark my-1">Home</Link>
                        <Link to='/' className="text-dark my-1">Why Cambridge English?</Link>
                        <Link to='/quick-test' className="text-dark my-1">Exams and tests</Link>
                        <Link to='/' className="text-dark my-1">Learning English</Link>
                        <Link to='/' className="text-dark my-1">Teaching English</Link>
                        <Link to='/' className="text-dark my-1">News</Link>
                        <Link to='/' className="text-dark my-1">Event</Link>
                        <Link to='/' className="text-dark my-1">Help</Link>
                        <Link to='/contact' className="text-dark my-1">About us</Link>
                    </div>
                    <div className="Footer-Item">
                    <div>
                        <img className='mb-5 mt-2 mr-5' src={footer1} alt="footer1"/>
                    </div>
                    <div>
                        <img className='mb-5 mt-2 mr-5' src={footer2} alt="footer1"/>
                    </div>
                    <div>
                        <img className='mb-5 mt-2 mr-5' src={footer4} alt="footer1"/>
                    </div>
                    <div>
                        <img className='mb-5 mt-2 mr-5' src={footer5} alt="footer1"/>
                    </div>
                    <div>
                        <img className='mb-5 mt-2 mr-5' src={footer3} alt="footer1"/>
                    </div>
                        
                    </div>
                </div>

                <p className="text-center my-5">Copyright © 2020 UCLES</p>
            </Container>
        </div>
    );
}

export default footer;