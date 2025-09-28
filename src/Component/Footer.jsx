import React from 'react';

import logo from '../assets/Logo.png'

const Footer = () => {
    return (
        <div className=''>
            {/* w-[1250px] */}
            <div className='max-w-screen md:w-[1250px] mx-auto'>
                <footer className="footer sm:footer-horizontal dark:text-gray-300 dark:border text-base-content py-36  p-10">
                    <aside>
                       <img className='w-42' src={logo} alt="" />
                        <p>
                            ACME Industries Ltd.
                            <br />
                            Providing reliable tech since 1992
                        </p>
                    </aside>
                    <nav>
                        <h6 className="footer-title">Services</h6>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                </footer>
            </div>

        </div>
    );
};

export default Footer;