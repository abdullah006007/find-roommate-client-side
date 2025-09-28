import React, { useState, useEffect } from 'react';
import Carosel from './Carosel';
import { useLoaderData } from 'react-router';
import RoomCard from './RoomCard';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import TypeWritter from './TypeWritter';
import ExtraSection from './ExtraSection';

const Home = () => {
  const roomMateData = useLoaderData();



  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">

      {/* Carousel */}
      <div className=''>
        <Carosel />
      </div>

      {import.meta.env.VITE_name}

      {/* Room Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-16 max-w-7xl mx-auto px-4">
        {roomMateData.map((data) => (
          <RoomCard key={data._id} data={data} />
        ))}
      </div>

      <ExtraSection></ExtraSection>
    </div>
  );
};

export default Home;
