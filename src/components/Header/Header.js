import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

import './Header.css';
import SearchBar from './SearchBar/SearchBar';
import Toolbar from './Toolbar/Toolbar';
import Menu from './Sidedraw/Menu';
import Sidedraw from './Sidedraw/Sidedraw';
import Logo from '../UI/Logo/Logo';
import Holder from './holder/holder';

const Header = (props) => {
    const [isShowSidedraw, setToggleSideDraw] = useState(false);
    function toggleSideDraw() {
        setToggleSideDraw(prevStatus => !prevStatus);
    }

    return (
        <div>
            <Holder />
            <div style={{backgroundColor: 'white', marginBottom:'12px'}}>
                <Container className="Header px-0 pt-2" >
                    <Logo />
                    <SearchBar />
                    <Menu 
                        clicked = {toggleSideDraw} 
                        isShowing = {isShowSidedraw} 
                    />
                </Container>
                <Toolbar />
                <Sidedraw 
                    isShowing = {isShowSidedraw} 
                    clicked = {toggleSideDraw}
                />
            </div>
        </div>
    );
}

export default Header;