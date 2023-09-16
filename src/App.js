import React, { useEffect, useContext } from 'react';

import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './Components/Signup/Signup'
import Login from './Components/Login/Login'
import Create from './Pages/Create'
import View from './Pages/ViewPost'
import Post from './store/PostContext';
import Profile from './Components/Profile/Profile';

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import { AuthContext, FirebaseContext } from './store/FirebaseContext';
import UserDetails from './store/UserDetails';



function App() {
  const { setUser } = useContext(AuthContext)
  const { firebase } = useContext(FirebaseContext)
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user)
    })
  })
  return (
    <div>
      <UserDetails>
        <Post>

          <Router>
            <Routes>

              <Route path='/' element={<Home />}></Route>
              <Route path='/SignuP' element={<SignUp />}> </Route>
              <Route path='/Login' element={<Login />}> </Route>
              <Route path='/sell' element={<Create />}> </Route>
              <Route path='/view' element={<View />}> </Route>
              <Route path='/profile' element={<Profile />}> </Route>


            </Routes>
          </Router>

        </Post>
      </UserDetails>

    </div>
  );
}

export default App;
