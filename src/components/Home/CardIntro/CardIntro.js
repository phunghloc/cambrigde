import React from 'react';

import './CardIntro.css';
import Cards from './CardItems/Cards';
import CardWidth from './CardItems/CardWidth';

const cardIntro = () => {
    return (
        <div className="CardIntro py-5">
            <div className="row justify-content-center text-center mb-5">
                <h2 className="col-md-8 col-sm-10">
                    We help people learn English and prove their skills to the world
                </h2>
            </div>
            <Cards />
            <CardWidth />
        </div>
    );
}

export default cardIntro;