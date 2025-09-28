import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { AuthContext } from '../Provider/AuthProvider';
import toast from 'react-hot-toast';
import FadeInSection from './FadeInSection';

const RoomcardDetails = () => {

    const { user } = useContext(AuthContext)


    const data = useLoaderData();
    const {
        title,
        name,
        amount,
        available,
        roomType,
        location,
        lifestyle,
        description,
        contact,
        email,
        _id
    } = data;

    const [liked, setLiked] = useState(false);

    const [likeCount, setLikeCount] = useState(0)


    console.log("User email:", user?.email);
    console.log("Post owner email:", email);



    const forLike = async () => {
        if (!user) return alert("Please log in first.");
        if (user.email === email) return toast.error("You can't like your own post");
        if (liked) return;

        const newCount = likeCount + 1;
        setLikeCount(newCount);
        setLiked(true);

        try {
            await fetch(`https://server-side-room.vercel.app/rooms/${_id}/like`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    likeCount: newCount,
                    userEmail: user.email,
                }),
            });
        } catch (error) {
            console.error("Like failed:", error);
            toast.error("Something went wrong");
            setLikeCount(likeCount);
            setLiked(false);
        }
    };



    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top on component mount
    }, []);





    useEffect(() => {
        const fetchRoom = async () => {
            //   window.scrollTo(0, 0);
            const res = await fetch(`https://server-side-room.vercel.app/rooms/${_id}`);
            const data = await res.json();
            setLikeCount(data.likeCount || 0);

        };

        fetchRoom();
    }, [_id]);




    return (
        <FadeInSection>
            <div>


                <div className="max-w-4xl mx-auto my-10 p-10   rounded-3xl shadow-2xl border border-gray-300 transition-transform hover:scale-[1.01]">
                    <div className="flex justify-between items-center dark:text-gray-300 mb-6">



                        <h2 className="text-4xl font-extrabold text-gray-800 dark:text-gray-300 flex items-center gap-2">
                            🏠 <span className="tracking-wide">{title}</span>
                        </h2>
                        <h1> {likeCount} People interested in</h1>



                        <div className='flex flex-col items-center'>
                            <button
                                onClick={() => { forLike(); setLiked(!liked); }}
                                aria-label="Like button"
                                className={`text-3xl transition-transform duration-200 focus:outline-none ${liked ? 'text-red-500 scale-125' : 'text-gray-700 cursor-pointer hover:text-red-500'
                                    }`}
                            >


                                {liked ? <FaHeart /> : <CiHeart />}
                            </button>

                            {
                                user && user.email === email ? '' : (
                                    <h1>
                                        {liked ? `contact: ${contact}` : ''}
                                    </h1>
                                )
                            }
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700 text-[17px] leading-relaxed">

                        <div className="space-y-2">
                            <p><span className="font-semibold dark:text-gray-300 text-gray-900">👤 Name:</span> {name}</p>
                            <p><span className="font-semibold dark:text-gray-300 text-gray-900">💰 Amount:</span> ${amount}</p>
                            <p><span className="font-semibold dark:text-gray-300 text-gray-900">📅 Available:</span> {available}</p>
                            <p><span className="font-semibold dark:text-gray-300 text-gray-900">🛏️ Room Type:</span> {roomType}</p>
                        </div>

                        <div className="space-y-2">
                            <p><span className="font-semibold  dark:text-gray-300 text-gray-900">📍 Location:</span> {location}</p>
                            <p><span className="font-semibold dark:text-gray-300 text-gray-900">🌿 Lifestyle:</span> {lifestyle}</p>

                            <p><span className="font-semibold dark:text-gray-300  text-gray-900">✉️ Email:</span> {email}</p>
                        </div>

                        <div className="md:col-span-2 mt-4">
                            <p className="font-semibold text-lg text-gray-800 mb-2">📝 Description:</p>
                            <p className="text-gray-600 bg-white p-5 rounded-xl shadow-inner border border-gray-200">
                                {description}
                            </p>
                        </div>

                        <div className="md:col-span-2 text-right text-sm text-gray-500 mt-4">
                            <p><span className="font-semibold">🆔 Listing ID:</span> {_id}</p>
                        </div>
                    </div>
                </div>
            </div>
        </FadeInSection>
    );
};

export default RoomcardDetails;
