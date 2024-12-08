import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const AuthLayout = () => {
    return (
        <div className=' dark:bg-[#434342] dark:text-white'>
            <section>
                <Header></Header>
            </section>
            <section>
                <Outlet></Outlet>
            </section>
            <section>
                <Footer></Footer>
            </section>
             
        </div>
    );
};

export default AuthLayout;