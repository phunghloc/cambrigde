import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavItem.css';

const navItem = (props) => {
    return (
        <li className="NavItem">
            <NavLink className="text-body" to={props.link} exact = {props.exact}>
                {props.children}
            </NavLink>
        </li>
    );
}

export default navItem;
