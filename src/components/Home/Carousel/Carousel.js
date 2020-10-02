import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import './Carousel.css';
import img1 from '../../../assets/img/slide1.jpg';
import img2 from '../../../assets/img/slide2.jpg';
import img3 from '../../../assets/img/slide3.jpg';

const slideList = [
  {
    img: img1,
    title: 'For every learner, every step of the way',
    detail: 'Watch our video',
  },
  {
    img: img2,
    title: 'Coronavirus - latest news for learners and teachers',
    detail: 'Find out more',
  },
  {
    img: img3,
    title: 'Your new English Classroom',
    detail: 'Discover our free resources',
  }
];

const CarouselCpnts = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect} className="CarouselCpnts">
        {slideList.map(slide => {
          return (
            <Carousel.Item key={slide.title}>
              <img
                className="d-block w-100"
                src={slide.img}
                alt={slide.detail}
              />
              <Carousel.Caption>
                <h3>{slide.title}</h3>
                <p>{slide.detail}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
        
      </Carousel>
    );
}

export default CarouselCpnts;