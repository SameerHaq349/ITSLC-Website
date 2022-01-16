import React from 'react'
import './Profile.css'
const Profile = (props) => {

    return (
        <div class="profile">
            <span class="title"> {props.title} </span> <br></br>
            <img src={props.image} class="profileImage"></img> <br></br>
            <span class="name"> {props.name} </span>
        </div>
        

    )

}

export default Profile