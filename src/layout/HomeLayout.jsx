import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <Banner></Banner>
            </header>

            <main></main>
            
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;