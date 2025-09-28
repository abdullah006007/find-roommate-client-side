import React from 'react';
import banner from '../assets/Blog.png'
import { Link } from 'react-router';

const ExtraSection = () => {
    return (
        <div>

            <div className="hero py-24">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={banner}
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div>
                        <h1 className="text-5xl dark:text-gray-300 font-bold">Find Your Perfect Roommate</h1>
                        <p className="py-6 dark:text-gray-300">
                           Browse all roommate posts near you. Click below to view details and connect instantly.
                        </p>

                        <Link to='/browse-listing'><button className="btn btn-primary">See all Post</button></Link>
                    
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ExtraSection;