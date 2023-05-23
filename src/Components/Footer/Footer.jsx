import React from 'react';
import './Footer.css'
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaGithub} from 'react-icons/fa';
const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer__logo'>MAMUN</a>
            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://www.facebook.com/mdmuntasir.mamun.589"><FaFacebookF/></a>
                <a href="https://instagram.com"><FaInstagram/></a>
                <a href="https://twtter.com"><FaTwitter/></a>
                <a href="https://github.com"><FaGithub/></a>
            </div>
            <div className="footer__copyright">
                <small>&copy;MOHAMMAD MUNTASIR MAMUN .All rights reserved. 2023</small>
            </div>
        </footer>
    );
};

export default Footer;