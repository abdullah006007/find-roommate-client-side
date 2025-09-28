import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../assets/Logo.png'
import { AuthContext } from '../Provider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const Navbar = () => {


    const { user, LogOut,loading } = useContext(AuthContext)

    const providerData = user?.providerData?.[0];
    if (loading) return <p>Loading...</p>



    const [isDarkMode, setDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
            return (
                localStorage.getItem('theme') === 'dark' ||
                window.matchMedia('(prefers-color-scheme: dark)').matches
            );
        }
        return false;
    });

    useEffect(() => {
        const root = window.document.documentElement;
        if (isDarkMode) {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);






    const handleSignOut = () => {
        LogOut()
            .then(() => {
                toast.success("You Logged Out successfully");
            })
            .catch((error) => {
                console.log(error);
            });

    }



    return (
        <div className="navbar  p-0  w-11/12 mx-auto">

            <Toaster />
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content  rounded-box z-1 mt-3 w-52 p-2 shadow">

                        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
                        <NavLink to="/find-roommate" className={({ isActive }) => isActive ? 'active' : ''}>Add to Find Roommates</NavLink>
                        <NavLink to="/browse-listing" className={({ isActive }) => isActive ? 'active' : ''}>Browse Listing</NavLink>
                        <NavLink to="/my-listing" className={({ isActive }) => isActive ? 'active' : ''}>My Listing</NavLink>
                        <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
                        



                    </ul>
                </div>

                {/* logo */}
                <div>
                    <img className='w-48' src={logo} alt="" />

                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal flex gap-5 items-center font-bold   px-1">


                    <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
                    <NavLink to="/find-roommate" className={({ isActive }) => isActive ? 'active' : ''}>Add to Find Roommates</NavLink>
                    <NavLink to="/browse-listing" className={({ isActive }) => isActive ? 'active' : ''}>Browse Listing</NavLink>
                    <NavLink to="/my-listing" className={({ isActive }) => isActive ? 'active' : ''}>My Listing</NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>


                    {/* Toggle Switch */}
                    <div className="flex justify-end p-4">
                        <DarkModeSwitch
                            checked={isDarkMode}
                            onChange={setDarkMode}
                            size={20}
                            sunColor="orange"
                            moonColor="dark"
                        />
                    </div>













                </ul>
            </div>
            <div className="navbar-end flex gap-5">



                <div>
                    {
                        user ? (

                            <div className='flex gap-5 items-center '>

                                <button onClick={handleSignOut} className='btn bg-orange-500 text-white'>Log Out</button>




                                <div className="relative group w-10 h-10  ">
                                    <img
                                        src={providerData?.photoURL || 'https://cdn-icons-png.flaticon.com/512/4042/4042356.png'}
                                        alt="User"
                                        className="w-ful  h-full object-cover cursor-pointer rounded-full"
                                    />

                                    {/* Tooltip */}
                                    <div className="absolute  right-full  top-16 -translate-y-1/2  bg-gray-800 text-white text-xs px-3 py-2 rounded shadow-lg
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-50">
                                        <p>{providerData?.displayName || 'No Name'}</p>
                                        <p>{providerData?.email || 'No Email'}</p>
                                    </div>
                                </div>




                            </div>


                        ) : (

                            <div className="flex gap-2">
                                <Link to="login" className="btn bg-orange-500 text-white">Log in</Link>
                                <Link to="signup" className="btn bg-orange-500 text-white">Sign Up</Link>
                            </div>

                        )

                    }
                </div>



            </div>
        </div>
    );
};

export default Navbar;