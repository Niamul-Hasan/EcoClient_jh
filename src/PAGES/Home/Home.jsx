// eslint-disable-next-line no-unused-vars
import React from 'react';
import TopBoard from './TopBoard';
import Banner from './Banner';
import HomeNav from './HomeNav';
import ExtraPage from './Extra/ExtraPage';
import ExtraTop from './Extra/ExtraTop';

const Home = () => {

    return (
        <div className='relative'>
            <TopBoard></TopBoard>
            <HomeNav></HomeNav>
            <ExtraTop />
            <Banner></Banner>
            <ExtraPage />
        </div>
    );
};

export default Home;