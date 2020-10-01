import React from 'react';

import './Sidedraw.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Logo from '../../UI/Logo/Logo';
import NavItems from '../NavItems/NavItems';
import SearchBar from '../SearchBar/SearchBar';

const Sidedraw = (props) => {
    let classes = ['Sidedraw', props.isShowing ? 'Sidedraw-open' : 'Sidedraw-close'].join(' ');
    
    return (
        <>
            <Backdrop isShowing = {props.isShowing} clicked = {props.clicked} />
            <div className={classes} onClick = {props.clicked}>
                <Logo />
                <SearchBar />
                <NavItems clicked />
            </div>
        </>
    );
}

export default Sidedraw;