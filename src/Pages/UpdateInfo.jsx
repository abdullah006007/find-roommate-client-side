import React from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router';


const UpdateInfo = () => {

    const info = useLoaderData()



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

} = info





const handleUpdateInfo = (e) => {
    e.preventDefault()
    const form = e.target;
    const formData = new FormData(form);
    const newInfo = Object.fromEntries(formData.entries())
    console.log(newInfo);

    fetch(`https://server-side-room.vercel.app/find-roommate/${_id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newInfo)
    })
        .then(res => res.json())
        .then(data => {
            toast.success('Info Updated successfully')
            console.log('data from put', data);
        })


        .catch(error => {
            console.log(error);
        })



}


return (


    <div>

        <div className='p-24 pt-0'>
            <div className='text-center p-12 space-y-4'>
                <h1 className='text-2xl font-semibold '>Add to Find Roommate</h1>

            </div>


            <form onSubmit={handleUpdateInfo} >
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">

                        <label className="label">Title</label>
                        <input type="text" className="input w-full" name='title' defaultValue={title} required />

                    </fieldset>





                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">

                        <label className="label">Location</label>
                        <input type="text" className="input w-full" name='location' defaultValue={location} required />

                    </fieldset>






                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">

                        <label className="label">Rent Amount</label>
                        <input type="text" className="input w-full" name='amount' defaultValue={amount} required />

                    </fieldset>




                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                        <label className="label">Room Type</label>
                        <select name='roomType' defaultValue={roomType} className="select  w-full">

                            <option>Single</option>
                            <option>Shared</option>

                        </select>
                    </fieldset>




                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                        <label className="label">Lifestyle Preferences (Pets, Smoking, Night Owl, etc.)</label>
                        <select name='lifestyle' defaultValue={lifestyle} className="select  w-full">

                            <option>Pets</option>
                            <option>Smoking</option>
                            <option>Night Owl</option>


                        </select>
                    </fieldset>






                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">

                        <label className="label">Description</label>
                        <input type="text" className="input w-full" name='description' defaultValue={description} />

                    </fieldset>





                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">

                        <label className="label">Contact Info</label>
                        <input type="text" className="input w-full" name='contact' defaultValue={contact} />

                    </fieldset>





                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                        <label className="label">Availability (available or not)</label>
                        <select name='available' defaultValue={available} className="select  w-full">

                            <option>available</option>
                            <option>Not Available</option>



                        </select>
                    </fieldset>




                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">

                        <label className="label">Email</label>
                        <input type="text" className="input w-full" name='email' defaultValue={email} readOnly />

                        {/*   */}

                    </fieldset>



                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">

                        <label className="label">User Name</label>
                        <input type="text" className="input w-full" name='name' defaultValue={name} readOnly />

                    </fieldset>




                </div>




                <input type="submit" className='btn w-full bg-orange-500 mt-5 text-white' value="Update Add to Find RoomMate" />



            </form>

        </div>

    </div>


);
};

export default UpdateInfo;