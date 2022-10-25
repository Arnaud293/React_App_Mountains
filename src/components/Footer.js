import React from 'react';
import Form from './Form';

const Footer = () => {
    return (
        <footer>
            <div class="footer-container">
                
                <Form />

                <div class="infos-container">
                    <div class="address">
                        <h4>Address</h4>
                        <p>1234 Somewhere Road #87257 <br/> Nashville, TN 00000-0000</p>
                    </div>
                    <div class="phone">
                        <h4>Phone</h4>
                        <p>(000) 000-0000</p>
                    </div>
                    <div class="email">
                        <h4>Email</h4>
                        <p>info@untitled.ltd</p>
                    </div>
                    <div class="social">
                        <h4>Social</h4>
                        <div class="icons-container">
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-facebook-f"></i>
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-github"></i>
                        </div>
                    </div>
                </div>
            </div>
    </footer>
    );
};

export default Footer;