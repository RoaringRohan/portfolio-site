import './index.scss';
import React from 'react';
import Nav from '../Nav';
import Footer from '../Footer';

const Layout = ({ children }) => {
    return (
        <div className="container layout">
            <Nav />
            <div className="content">
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default Layout;