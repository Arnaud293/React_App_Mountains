
import React from 'react';
import Nav from './Nav';


const Header = () => {
    return (
        <div>
            <header>
        <div className="header-top">
            <h1>La Montagne <br/> ça vous gagne</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elitm esse omnis, aliquid a, ametdolor, hic itaque ullam assumenda fuga natus nesciunt officiis placeat!</p>
            <br/>
            <br/>
            <br/>
            <i className="fa-solid fa-angles-down"></i>
        </div>
        <Nav />
    </header>
        </div>
    );
};

export default Header;