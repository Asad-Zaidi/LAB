import React from 'react'
import { fakeData } from './fakeData'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { addUser } from '../app/features/UserData/userSlice';
import '../app/style/styles.css';

const UserGetData = () => {
    const dispatchEvent = useDispatch();
    const data = useSelector((state) => state.userData)
    const getFakeUserInfo = () => {
        dispatchEvent(addUser(fakeData()));
    }
    return (
        <>
            <h1>From User Get Data Component</h1>
            <button className='data' onClick={getFakeUserInfo}>Add User</button>
            <ul>
                {
                    data.map((userData) => {
                        //console.log(userData);
                        return <li>
                            {userData}
                            </li>
                    })
                }
            </ul>
        </>
    )
}

export default UserGetData