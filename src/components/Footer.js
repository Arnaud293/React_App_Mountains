import React from 'react';
import Form from './Form';

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                
                <Form />

                <div className="infos-container">
                    <div className="address">
                        <h4>Address</h4>
                        <p>1234 Somewhere Road #87257 <br/> Nashville, TN 00000-0000</p>
                    </div>
                    <div className="phone">
                        <h4>Phone</h4>
                        <p>(000) 000-0000</p>
                    </div>
                    <div className="email">
                        <h4>Email</h4>
                        <p>info@untitled.ltd</p>
                    </div>
                    <div className="social">
                        <h4>Social</h4>
                        <div className="icons-container">
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-facebook-f"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-github"></i>
                        </div>
                    </div>
                </div>
            </div>
    </footer>
    );
};

export default Footer;