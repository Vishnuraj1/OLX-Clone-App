import React, { useContext ,useEffect} from 'react'
import './Profile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faRectangleXmark, } from '@fortawesome/free-regular-svg-icons'
import { useNavigate } from 'react-router-dom'
import { FirebaseContext } from '../../store/FirebaseContext';


const Profile = () => {
  const navigate=useNavigate()
  const goBack = () => {
		navigate(-1);
	}
  // const {firebase}=useContext(FirebaseContext)


  // useEffect(()=>{

  //   var user = firebase.auth().currentUser
  
  //  console.log(user)
  // },[])
    
  
  
 
  // const {UserDetails} = useContext(UserContext)
  // console.log(UserDetails)

  return (
    <div className='mainContainer'>
        <div className='Container'>
            <img className='profilePhoto' src="../../../Images/R15V3.jpg" alt="" />
            {/* <h1>{UserDetails.username}</h1> */}
            <h1>UserName</h1>
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
