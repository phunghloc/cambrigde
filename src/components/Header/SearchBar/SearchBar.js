import React from 'react';
import { Button } from 'react-bootstrap';

import './SearchBar.css';

const searchBar = () => {
    return (
        <div className="SearchBar rounded-pill">
            <input type="text" className=" m-auto" placeholder="Tìm kiếm..."/>
            <Button className="px-4"><i className="fa fa-search text-dark"></i></Button>
        </div>
    );
}

export default searchBar;