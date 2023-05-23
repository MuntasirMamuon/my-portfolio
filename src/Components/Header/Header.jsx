import React from 'react';
import './Header.css'
import CTA from './CTA';
import ME from '../../assets/ME.png'
import HeaderSocials from './HeaderSocials';
const Header = () => {
    return (
        <div className="Container header__container">
            <header>
                <div >
                    <h5>Hello I'm</h5>
                    <h1>Mohammad Muntasir Mamun</h1>
                    <h5 className='text-light'>MEANstack Developer</h5>
                    <CTA/>
                    <HeaderSocials/>
                    <div className="me">
                        <img src={ME} alt="me" />
                    </div>

                    <a href="#contact" className='scroll__down'>Scroll Down</a>
                </div>
            </header>
            
        </div>
    );
};

export default Header;