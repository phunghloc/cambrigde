import React from 'react';
import { Container } from 'react-bootstrap';

import './Home.css';
import Carousel from './Carousel/Carousel';
import CardIntro from './CardIntro/CardIntro';

const index = () => {
    return (
        <Container>
            <Carousel />

            <CardIntro />

        </Container>
    );
}

export default index;