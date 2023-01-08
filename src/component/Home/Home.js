import React from 'react';
import Footer from '../Footer/Footer';
import Menu from './Menu';
import Post from './Post';

const Home = () => {
    return (
        <div>
            <Menu/>
            <Post/>
            <Footer/>
        </div>
    );
};

export default Home;