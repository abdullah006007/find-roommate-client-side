import React from 'react';
import { useLoaderData } from 'react-router'; // ✅ correct import
import BrowseListinginfo from '../Component/BrowseListinginfo';

const BrowseListing = () => {

    const roomMateData = useLoaderData()


   

    return (
       
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 my-16 max-w-screen md:w-[1200px] mx-auto'>

                {
                    roomMateData.map(data=> <BrowseListinginfo key={data._id} data={data}></BrowseListinginfo>)
                }

                
            </div>
    );
};

export default BrowseListing;
