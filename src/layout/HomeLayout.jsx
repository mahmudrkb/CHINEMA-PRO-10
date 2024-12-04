import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import TopMovies from '../components/TopMovies';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <Banner></Banner>
            </header>

            <main>
                <TopMovies></TopMovies>
            </main>
            
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;