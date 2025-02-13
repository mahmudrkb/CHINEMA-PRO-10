import React from 'react';
import Header from '../components/Header';

import Footer from '../components/Footer';

import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <div className=' dark:bg-[#434342] dark:text-white'>
            <header>
                <Header></Header>
              
            </header>

            <main>
                <Outlet></Outlet>
            </main>
            
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;