import React,{useEffect,useState,useContext} from 'react';
import { FirebaseContext } from '../../store/FirebaseContext';
import { PostContext } from '../../store/PostContext';

import './View.css';
function View() {
  const[UserDetails,setUserDetails] =useState()
  const {PostDetails} =useContext(PostContext)
  const {firebase} = useContext(FirebaseContext)

//   useEffect(()=>{
//     const {UserId} =PostDetails
// firebase.firestore().collection('users').where('id','==',UserId).get().then((result)=>{
//   result.forEach(doc => {
//     setUserDetails(doc.data())
    
//   });
// })
//   },[])

 

  const value = PostDetails
  if (value){
      localStorage.setItem("Name",JSON.stringify(value))
      var txt = JSON.parse(localStorage.getItem('Name'))
      console.log(txt)
    }

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={txt.url}
          alt=""
        />
       
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {txt.Price} </p>
          <span>{txt.Name}</span>
          <p>{txt.Category}</p>
          <span>{txt.createdAt}</span>
        </div>

   {/* {  UserDetails && <div className="contactDetails">
          <p>Seller details</p>
          <p>{UserDetails.username}</p>
          <p>{UserDetails.phone}</p>
        </div>
     }   */}

      </div>
    </div>
  );
}
export default View;
