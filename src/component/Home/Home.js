import React from 'react';
import Footer from '../Footer/Footer';
import Menu from './Menu';
import Posts from './Posts';

const Home = () => {
    return (
        <div>
            <Menu/>
            <Posts/>
            <Footer/>
        </div>
    );
};

export default Home;