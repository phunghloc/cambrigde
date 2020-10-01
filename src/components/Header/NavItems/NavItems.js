import React from 'react';

import './NavItems.css';
import NavItem from './NavItem/NavItem';

const navItems = () => {
    return (
        <ul className="NavItems">
            <NavItem link = '/' exact = {true}> Trang chủ </NavItem>
            <NavItem link = '/quick-test'> Kiểm tra </NavItem>
            <NavItem link = '/contact'> Liên hệ </NavItem>
        </ul>
    );
}

export default navItems;