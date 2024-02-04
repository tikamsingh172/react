import React, { useContext } from 'react';
import UserContext from '../contexts/UserContext';

function Profile() {
    const { user } = useContext(UserContext);
    console.log('user:', user)
    if(!user){
        return (
            <div className='grid place-content-center'>
                <div className=' bg-orange-200 p-5 '>
                    <h2>Please Login </h2>
                </div>
            </div>
        )
    }else{
        return (
            <div className='grid place-content-center'>
                <div className=' bg-orange-200 p-5 '>
                    <h2>User Name: {user.userName} </h2>
                    <h2>Password: {user.password} </h2>
                </div>
            </div>
        )
    }

}

export default Profile;