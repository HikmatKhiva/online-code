import React from 'react';
import Avatar from 'react-avatar';
import './client.css';
const Client = ({ username }) => {
    return (
        <div className='client'>
            <Avatar name={username} size={50} round='10px' />
            <span className='user-name'>{username}</span>
        </div>
    )
}
export default Client;