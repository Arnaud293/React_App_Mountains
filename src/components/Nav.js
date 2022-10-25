import React from 'react';

const Nav = () => {
    return (
        <nav>
            <ul className="nav-menu">
                <a href=""><li>This is Massively</li></a>
                <a href=""><li>Generic page</li></a>
                <a href=""><li>Element Reference</li></a>
            </ul>
            <ul className="nav-icon">
                <a href=""><li><i className="fa-brands fa-twitter"></i></li></a>
                <a href=""><li><i className="fa-brands fa-facebook-f"></i></li></a>
                <a href=""><li><i className="fa-brands fa-instagram"></i></li></a>
                <a href=""><li><i className="fa-brands fa-github"></i></li></a>
            </ul>
        </nav>
    );
};

export default Nav;