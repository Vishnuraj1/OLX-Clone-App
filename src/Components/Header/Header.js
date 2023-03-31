import React, { useContext } from 'react';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext, FirebaseContext } from '../../store/FirebaseContext';
import { Link, useNavigate,useEffect } from 'react-router-dom';
import { UserContext } from '../../store/UserDetails';

function Header() {
  const { user } = useContext(AuthContext)
  const { firebase } = useContext(FirebaseContext)
  const navigate = useNavigate()

// useEffect(()=>{
//   firebase.firestore().collection()
// })

  // const {UserDetails,setUserDetails} =useContext(UserContext)
  
  // useEffect(()=>{ 
    
  //   firebase.firestore().collection('users').where('id','==',val).get().then((res)=>{
  //     res.forEach(doc=>{
  //       setUserDetails(doc.data())
  //     })
  //   })
  // },[])
  // console.log(UserDetails)


  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <Link to={'/login'}><span >{user ? <Link to={'/profile'}>{ `Welcome  ${user.displayName}`}</Link> : "Login"}</span></Link>
          <hr />
        </div >

        {user && <span className='Btn' onClick={() => {
          firebase.auth().signOut()
          navigate('/login')
        }}>Log out</span>}

        <Link to={'/sell'}>
          <div className="sellMenu">
            <SellButton></SellButton>
            <div className="sellMenuContent">
              <SellButtonPlus></SellButtonPlus>
              <span>SELL</span>
            </div>
          </div>
        </Link>

      </div>
    </div>
  );
}

export default Header;
