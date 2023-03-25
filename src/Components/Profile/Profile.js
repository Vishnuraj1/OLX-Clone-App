import React from 'react'
import './Profile.css'


const Profile = () => {
  return (
    <div className='mainContainer'>
        <div className='Container'>
            <img className='profilePhoto' src="../../../Images/R15V3.jpg" alt="" />
            <h1>Name</h1>
            <div className='subContainer'>
                <p>Whitelist</p>
                <p>Selled products</p>
                <p>Buyed products</p>
                <p>Phone:</p>
            </div>
        </div>
      
    </div>
  )
}

export default Profile
