import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className="min-h-screen  flex items-center justify-center px-6 py-12">
            <div className="text-center max-w-xl">
                <h1 className="text-7xl font-extrabold text-gray-900 mb-4">404</h1>
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                    Page Not Found
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                    Sorry, the page you're looking for doesn't exist or has been moved. 
                    Let us guide you back to the comfort of home.
                </p>
                <Link
                    to="/"
                    className="inline-block px-6 py-3 bg-black text-white text-lg font-medium rounded-lg shadow-md hover:bg-gray-800 transition duration-300"
                >
                    Go Back Home
                </Link>

                {/* Optional decorative element */}
                <div className="mt-10">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmWru8q17zpOzzzT1s475ZS_8fOL1GS0teSw&s"
                        alt="Lost illustration"
                        className="w-64 mx-auto opacity-80"
                    />
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
