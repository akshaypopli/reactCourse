import React from 'react';
import './UserInput.css'

const UserInput = (props) => {
    
    return(
        <div>
            <input onChange={props.changed} value={props.oldname} className='UserInput' type='text'/>
        </div>
    );
}

export default UserInput;