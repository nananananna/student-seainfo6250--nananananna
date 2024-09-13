import { useState, useEffect } from 'react';
import Account from './Account';
import Login from './Login';
import { fetchSession } from './services';

import './App.css';


function App() {
  const [userState, setUserState] = useState({
    username: '',
    isLoggedIn: false,
    error: ''
  });

  useEffect(
    () => {
      fetchSession()
        .then(response => {
          // use session data to set state
          setUserState({
            username: response.username,
            isLoggedIn: true,
            error: ''
          })
        })
        .catch(err => {
          // use error data to set state        
          setUserState({
            userData: {},
            isLoggedIn: false,
            error: ''
          });
        });
    },
    []
  );

  function onLogin(username) {
    setUserState({
      username,
      isLoggedIn: true,
      error: ''
    })

  }

  function onLogout() {
    setUserState({
      username: '',
      isLoggedIn: false,
      error: ''
    })
  }


  return (
    <div className="App">
      <h1>Nexura Bank - Banking at the Speed of Life</h1>

      <div className='display-panel'>
        {userState.isLoggedIn ? (
          <>
            <div className='left-panel'>
              <Account
                user={userState.username}
                setUserState={setUserState}
                onLogout={onLogout}
              />
              <span className='error'>{userState.error}</span>
            </div>

          </>
        ) : (
          <>
            <div className='left-panel'>

              <Login
                setUserState={setUserState}
                onLogin={onLogin}
              />
              <span className='error'>{userState.error}</span>
            </div>
            <div className='right-panel'>
              <img className='bank' src="../public/city.jpg" alt="bank-img" />
            </div>
          </>
        )}
      </div>

      <footer>Nexura Bank reserves the right of final interpretation</footer>
    </div>

  );
}

export default App;