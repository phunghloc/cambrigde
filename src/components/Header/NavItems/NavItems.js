import React from 'react';

import './NavItems.css';
import NavItem from './NavItem/NavItem';

const navItems = () => {
    return (
        <ul className="NavItems">
            <NavItem link = '/' exact = {true}> Home </NavItem>
            <NavItem link = '/quick-test'> Quick Test </NavItem>
            <NavItem link = '/contact'> Contact </NavItem>
        </ul>
    );
}

export default navItems;