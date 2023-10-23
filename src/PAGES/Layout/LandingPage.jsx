// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';

const LandingPage = () => {
    return (
        <div>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default LandingPage;