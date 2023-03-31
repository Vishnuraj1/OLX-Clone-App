import React from 'react'
import './Profile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faRectangleXmark, } from '@fortawesome/free-regular-svg-icons'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const navigate=useNavigate()
  const goBack = () => {
		navigate(-1);
	}
  return (
    <div className='mainContainer'>
      {/* <FontAwesomeIcon icon="fa-light fa-rectangle-xmark" fade /> */}
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
      
        <FontAwesomeIcon onClick={goBack} icon={faRectangleXmark} size="3x" fade style={{color:'red',cursor:'pointer'}} />
    </div>
  )
}

export default Profile
