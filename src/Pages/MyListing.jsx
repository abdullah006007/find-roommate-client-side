import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider'
import toast, { Toaster } from 'react-hot-toast';
import Swal from 'sweetalert2';
import { Link } from 'react-router';
import FadeInSection from '../Component/FadeInSection';

const MyListing = () => {
    const [listings, setListings] = useState([]);

    const { user } = useContext(AuthContext)
    const email = user?.email;








    useEffect(() => {
        if (!email) return;
        fetch(`https://server-side-room.vercel.app/users?email=${email}`)
            .then(res => res.json())
            .then(data => {
                console.log('data', data);
                setListings(data)
            })
            .catch(error => {
                console.log(error);
            })

    }, [email])





    const handleDelete = (id) => {



        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`https://server-side-room.vercel.app/users/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {

                        const remainingUser = listings.filter(list => list._id != id)
                        setListings(remainingUser);


                        console.log('data from delete', data);
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"



                        });
                    })

                    .catch(error => {
                        console.log(error);
                    })



            }
        });




    }









    return (
        <div>
            <Toaster />


            <FadeInSection>
                <div className='my-10 px-8'>
                    <h2 className='text-2xl pb-3'>My Total Post:  {listings.length} </h2>

                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className='dark:text-gray-300'>
                                    <th>
                                        No
                                    </th>
                                    <th>Name</th>
                                    <th>Title</th>
                                    <th>Room Type</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    listings.map((user, index) =>

                                        <tr key={user._id}>
                                            <th>
                                                {index + 1}
                                            </th>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">

                                                    </div>
                                                    <div>
                                                        <div className="font-bold"> {user.name} </div>
                                                        <div className="text-sm opacity-50"> {user.location} </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                {user.title}
                                                <br />
                                                <span className="badge badge-ghost badge-sm"> rent: {user.amount} </span>
                                            </td>
                                            <td>{user.roomType}</td>
                                            <th>

                                                <Link to={`/update-info/${user._id}`} > <button className="btn  btn-xs">Update</button> </Link>
                                                <button onClick={() => handleDelete(user._id)} className="btn  btn-xs">Delete</button>
                                            </th>
                                        </tr>)
                                }



                            </tbody>

                        </table>
                    </div>

                </div>
            </FadeInSection>




        </div>
    );
};

export default MyListing;