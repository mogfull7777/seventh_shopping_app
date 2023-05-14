import React, {useEffect, useState} from 'react';
import axios from "axios";

const Profile = () => {

    const [userInfo, setUserInfo] = useState({});

    const getUserInfo = async () => {

        try {

            const token = await localStorage.getItem("token");

            const config = {
                headers : {
                    authorization : "Bearer " + token.toString()
                }
            }

            const profileData = await axios.get('http://localhost:9090/api/users/profile', config)

            console.log('$$$$$$$$$$$$$$', profileData)

            if (profileData.status === 200) {
                console.log(profileData.data)
                setUserInfo(profileData.data)
            }

        } catch (err) {
            console.log(err.massage)
        }

    }

    useEffect(() => {
        getUserInfo()
    }, [])

    return (
        <div>
            <h1>Profile</h1>
            <h2>{userInfo.email}</h2>
            <h2>{userInfo.name}</h2>
            <h2>{userInfo._id}</h2>
        </div>
    );
};

export default Profile;