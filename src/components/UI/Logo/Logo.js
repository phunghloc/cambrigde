import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../../assets/img/logo.png';
import './Logo.css';

const logo = () => {
    return (
        <Link to="/" >
            <img className="Logo" src={logoImg} alt="logo"/>
        </Link>
    );
}

export default logo;