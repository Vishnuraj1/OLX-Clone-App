import React,{useEffect,useState,useContext, useReducer} from 'react';
import { FirebaseContext } from '../../store/FirebaseContext';
import { PostContext } from '../../store/PostContext';
import { UserContext } from '../../store/UserDetails';

import './View.css';
function View() {
  const {UserDetails,setUserDetails} =useContext(UserContext)
  const {PostDetails} =useContext(PostContext)
  const {firebase} = useContext(FirebaseContext)

 

var value = PostDetails
  if (value){
      localStorage.setItem("Name",JSON.stringify(value))}
      var txt = JSON.parse(localStorage.getItem('Name'))
      console.log(txt)
    
  
  if(value){ 
    localStorage.setItem("Nam", JSON.stringify(value.UserId));
  }
    
  var val=JSON.parse(localStorage.getItem('Nam'));

  useEffect(()=>{ 
    
    firebase.firestore().collection('users').where('id','==',val).get().then((res)=>{
      res.forEach(doc=>{
        setUserDetails(doc.data())
      })
    })
  },[])
  
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

   {  UserDetails && <div className="contactDetails">
          <p>Seller details</p>
          <p>{UserDetails.username}</p>
          <p>{UserDetails.phone}</p>
        </div>
     }  

      </div>
    </div>
  );
}
export default View;
