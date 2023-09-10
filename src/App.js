// src/App.js
// npm install firebase

import React, { useEffect, useState } from 'react';
import { signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/firebaseConfig';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (result) => {
      if (result) {
        const { displayName, email } = result;
        setUserData({ displayName, email });
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const SignUpUsingGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const { displayName, email } = result.user;
        setUserData({ displayName, email });
        setIsLoggedIn(true);
      })
      .catch((error) => {
        console.log({ error });
      });
  };

  const Logout = () => {
    signOut(auth)
      .then(() => {
        setUserData({});
        setIsLoggedIn(false);
      })
      .catch((error) => {
        console.log({ error });
      });
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        <div className="login-container">
          <h2>Welcome to the Authentication App with Firebase</h2>
          <button onClick={SignUpUsingGoogle} type="button" className="login-with-google-btn">
            Sign in with Google
          </button>
        </div>
      ) : (
        <div className="profile-container">
          <div className="profile-card">
            <div className="profile-card__img">
              <img
                src="https://raw.githubusercontent.com/Wasabi95/NavBar-SideMenu/master/images/cc.png"
                alt="profile card"
              />
            </div>
            <div className="profile-card__cnt">
              <div className="profile-card__name">{userData.displayName}</div>
              <div className="profile-card__txt">{userData.email}</div>
              <div className="profile-card-ctr">
                <button className="profile-card__button button--orange" onClick={Logout}>
                  Log out
                </button>
              </div>
            </div>
            <div class="">
       

        
      </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
