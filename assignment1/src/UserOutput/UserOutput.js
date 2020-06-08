import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
    const style={
        font: 'inherit',
        margin: '10px auto',
        width: '200px'
    }
    return (
        <div>
            <p style={style} className='UserOutput'>I am {props.username}</p>
            <p style={style} className='UserOutput'>This is my first assignment</p>
        </div>
    );
}

export default UserOutput;