import React from 'react';
import { Link } from 'react-router';
import FadeInSection from './FadeInSection';

const RoomCard = ({ data }) => {


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
    } = data


    return (
        <div>
            <FadeInSection>
                <div className="card  max-w-md  shadow-xl rounded-2xl border border-gray-200 transition-transform hover:scale-105 duration-300">
                    <div className="card-body p-6 space-y-4">
                        <FadeInSection delay={400} duration={1500}>
                            <h2 className="text-2xl dark:text-gray-300 font-bold text-indigo-600">{title}</h2>
                        </FadeInSection>
                        <p className="text-lg dark:text-gray-300 font-medium text-gray-800">{name}</p>
                        <p className="text-gray-700"><span className="font-semibold dark:text-gray-300 text-black">Description:</span> {description}</p>
                        <p className="text-gray-700"><span className="font-semibold dark:text-gray-300 text-black">Rent Amount:</span> <span className="text-green-600 font-semibold">{amount}</span></p>
                        <p className="text-gray-700"><span className="font-semibold dark:text-gray-300 text-black">Status:</span> <span className={`font-semibold ${available === "available" ? "text-emerald-500" : "text-red-500"}`}>{available}</span></p>

                        <Link to={`/find-roommate/${_id}`}>
                            <div className="card-actions justify-end pt-4">
                                <button className="btn bg-indigo-600 text-white hover:bg-indigo-700 transition duration-300 rounded-xl shadow-md px-6 py-2">
                                    See More
                                </button>
                            </div>
                        </Link>
                    </div>
                </div>
            </FadeInSection>

        </div>
    );
};

export default RoomCard;
