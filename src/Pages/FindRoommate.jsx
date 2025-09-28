import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import FadeInSection from '../Component/FadeInSection';

const FindRoommate = () => {



    const { user } = useContext(AuthContext)



    const providerData = user?.providerData?.[0];


    const handleFindRoomMate = (e) => {
        e.preventDefault()

        const form = e.target;
        const formData = new FormData(form);
        const roomMateInfo = Object.fromEntries(formData.entries());
        console.log(roomMateInfo);

        // post to sever

        fetch('https://server-side-room.vercel.app/find-roommate', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(roomMateInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log('data from client', data);
                if (data.insertedId) {
                    toast.success('Added successfully')
                }
            })
            .catch(error => {
                console.error('Error posting roommate info:', error);
            });



    }







    return (


        <div>

            <FadeInSection>
                <div className='p-24 pt-0 dark:text-gray-900'>
                    <div className='text-center p-12 space-y-4 '>
                        <h1 className='text-2xl dark:text-white font-semibold '>Add to Find Roommate</h1>

                    </div>


                    <form onSubmit={handleFindRoomMate} >
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

                            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">

                                <label className="label">Title</label>
                                <input type="text" className="input w-full" name='title' placeholder="Looking for RoomMate in NY" required />

                            </fieldset>





                            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">

                                <label className="label">Location</label>
                                <input type="text" className="input w-full" name='location' placeholder="NY" required />

                            </fieldset>






                            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">

                                <label className="label">Rent Amount</label>
                                <input type="text" className="input w-full" name='amount' placeholder="Please Input rent Amount" required />

                            </fieldset>




                            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                                <label className="label">Room Type</label>
                                <select name='roomType' defaultValue="Pick a browser" className="select  w-full">

                                    <option>Single</option>
                                    <option>Shared</option>

                                </select>
                            </fieldset>




                            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                                <label className="label">Lifestyle Preferences</label>
                                <select name='lifestyle' defaultValue="Pick a browser" className="select  w-full">

                                    <option>Pets</option>
                                    <option>Smoking</option>
                                    <option>Night Owl</option>


                                </select>
                            </fieldset>






                            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">

                                <label className="label">Description</label>
                                <input type="text" className="input w-full" name='description' placeholder="Please Write Description...." required />

                            </fieldset>





                            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">

                                <label className="label">Contact Info</label>
                                <input type="text" className="input w-full" name='contact' placeholder="Please input your Contact Info" required />

                            </fieldset>





                            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                                <label className="label">Availability (available or not)</label>
                                <select name='available' defaultValue="Pick a browser" className="select  w-full">

                                    <option>available</option>
                                    <option>Not Available</option>



                                </select>
                            </fieldset>




                            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">

                                <label className="label">Email</label>
                                <input type="text" className="input w-full" name='email' value={providerData?.email || ''} readOnly />

                            </fieldset>



                            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">

                                <label className="label">User Name</label>
                                <input type="text" className="input w-full" name='name' value={providerData?.displayName || ''} readOnly />

                            </fieldset>




                        </div>




                        <input type="submit" className='btn w-full bg-orange-500 mt-5 text-white' value="Add to Find RoomMate" />



                    </form>

                </div>
            </FadeInSection>

        </div>
    );
};

export default FindRoommate;