import './index.scss';
import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';

const Nav = () => {
    const [isNavVisible, setIsNavVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsNavVisible(window.scrollY <= 50);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="container nav">
            <div className={`navbar loaded ${isNavVisible ? '' : 'hidden'}`}>
                <ul>
                    <li><NavLink to="/work">Work</NavLink></li>
                    <li><NavLink to="/projects">Projects</NavLink></li>
                    <li><NavLink to="/hobbies">Hobbies</NavLink></li>
                    <li><NavLink to="/blog">Blog</NavLink></li>
                </ul>
                <div className="logo-container">
                    <Link to="/">
                        <img src={Logo} alt="Logo" className="logo" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Nav;
