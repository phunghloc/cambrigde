import React from 'react';
import { Container } from 'react-bootstrap';

import './Toolbar.css';
import NavItems from '../NavItems/NavItems';

const toolbar = () => {
    return (
        <Container className="Toolbar px-0">
            <nav className = "Toolbar-nav">
                <NavItems />
            </nav>
        </Container>
    );
}

export default toolbar;