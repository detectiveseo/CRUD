import React from 'react';
import UserCard from './UserCard'
import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const loadedDada = useLoaderData();
    console.log(loadedDada)
    return (
        <div className='w-6/12 mx-auto'>
            <div className='grid grid-cols-3 gap-5'>
                {
                    loadedDada.map(user => <UserCard key={user._id} data={user} />)
                }
            </div>
        </div>
    );
};

export default Users;