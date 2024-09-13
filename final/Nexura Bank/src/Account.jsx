
import { useState, useEffect } from 'react';
import { Transfer, Send, Convert } from './Operations';
import { fetchGetAccount, fetchLogout } from './services';
import { MESSAGES } from './constants';

function Account({ user, setUserState, onLogout }) {
  const [operation, setOperation] = useState('home');
  const [account, setAccount] = useState({});
  const [status, setStatus] = useState('');


  useEffect(() => {
    fetchGetAccount(user)
      .then(response => {
        const { userAccount } = response;
        setAccount(userAccount);
      })
      .catch(err => {
        setUserState(prevState => ({
          ...prevState,
          isLoggedIn: true,
          error: MESSAGES[err.error] || 'Unexpected error occurred'
        }));
      });
  }, [user]); 
  

  const handleOperationChange = (value) => {
    setOperation(value);
    setStatus('');
  };

  const OperationComponent = {
    'transfer': Transfer,
    'send': Send,
    'convert': Convert
  };

  const ActiveOperation = OperationComponent[operation] || (() => <div>Select an operation above.</div>);

  return (
    <div className="account-panel">
      <div className="opening">Hello {user},</div>
      <div className="user-account">
        <div className="asset-title">Assets</div>
        <div className="assets">
          {Object.entries(account).map(([asset, value], index) => (
            <div key={index} className="asset">
              <img src={`../public/${asset.toLowerCase()}.png`} alt={asset} />
              <div>{asset}: {value}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="function">
        {['transfer', 'send', 'convert'].map(op => (
          <button key={op} value={op} onClick={(e) => handleOperationChange(e.target.value)}>
            {op.charAt(0).toUpperCase() + op.slice(1)}
          </button>
        ))}
      </div>
      <div className="function-display">
        <ActiveOperation setAccount={setAccount} setStatus={setStatus} />
      </div>
      <div className="status">{status}</div>
      <button className="logout-button" onClick={() => { fetchLogout(); onLogout(); }}>
        Logout
      </button>
    </div>
  );
}

export default Account;
