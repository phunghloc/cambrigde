import React from 'react';
import { Container } from 'react-bootstrap';

import './Home.css';
import Carousel from './Carousel/Carousel';
import CardIntro from './CardIntro/CardIntro';
import CircleCard from './CircleCard/CircleCard';
import Connect from './Connect/Connect';

const index = () => {
    return (
        <Container>
            <Carousel />

            <CardIntro />

            <CircleCard />

            <Connect />
        </Container>
    );
}

export default index;