import React from 'react';

const About = () => {
    return (
        <div className="max-w-5xl mx-auto px-6 py-16 text-gray-900 font-sans dark:text-gray-300">
            <h1 className="text-5xl font-extrabold mb-6 text-center tracking-tight">
                About RoomMatch
            </h1>
            <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                Discover a new standard of living. At <strong>RoomMatch</strong>, we connect discerning individuals with elegant, handpicked living spaces—curated for comfort, style, and compatibility.
            </p>

            <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        We believe that your space should reflect your lifestyle. RoomMatch was created to transform the room-hunting process—making it personal, luxurious, and seamless. 
                        Whether you’re a student, professional, or entrepreneur, we ensure your next space is more than just a place to stay—it’s a place to thrive.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-4">Why RoomMatch?</h2>
                    <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed">
                        <li>Curated, high-quality room listings with verified details</li>
                        <li>Intelligent roommate matching based on lifestyle & preferences</li>
                        <li>Trusted by thousands of satisfied clients worldwide</li>
                        <li>Elegant interface with a stress-free user experience</li>
                    </ul>
                </div>
            </div>

            <div className="mt-16 text-center">
                <h2 className="text-2xl font-semibold mb-4">Elevate Your Lifestyle</h2>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                    At <strong>RoomMatch</strong>, luxury meets convenience. Our mission is simple—connect you to the right space, the right people, and the right environment to support your journey.
                    Whether you're relocating, upgrading, or starting fresh, we're here to match you with more than just a room. We're here to match you with a lifestyle.
                </p>
            </div>
        </div>
    );
};

export default About;
