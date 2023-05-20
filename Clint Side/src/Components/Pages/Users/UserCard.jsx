import React from 'react';
import { deleteUser } from '../../../function';

const UserCard = ({data}) => {
    const {photo, name, email, phone, location} = data;
    return (
        <div className='border p-5 rounded'>
            <img className=' w-96 h-72 object-cover rounded' src={photo} alt="" />
            <p className='font-bold'>{name}</p>
            <p>{email}</p>
            <p>{phone}</p>
            <div>
                <button className='btn bg-slate-500 border-0 mt-2'>Delete</button>
                <button
                onClick={() => deleteUser(name)}
                className='btn bg-red-600 border-0 mt-2 ml-5'>Delete</button>
            </div>
        </div>
    );
};

export default UserCard;