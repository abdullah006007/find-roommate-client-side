import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router';
import Footer from './Footer';
import Marquee from "react-fast-marquee";
import Home from './Home';

const MainLayout = () => {
    return (
        <div className='bg-white dark:bg-black text-black dark:text-white max-w-screen'>
            <Marquee>
                Find Your RoomMate Today!
            </Marquee>

            <div className=''>
                <Navbar></Navbar>      

            </div>

            <div className='min-h-[calc(100vh-117px)] max-w-7xl mx-auto'>
                <Outlet></Outlet>
            </div>

            <Footer></Footer>


        </div>
    );
};

export default MainLayout;