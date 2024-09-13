import React, { useState } from 'react';
import { fetchTransfer } from "./services";
import { fetchSend } from "./services";
import { fetchConvert } from "./services";
import { MESSAGES } from "./constants";

//Transfer Component
export function Transfer({ setAccount, setStatus }) {
    const [mode, setMode] = useState('')
    const [asset, setAsset] = useState('');
    const [total, setTotal] = useState('');

    function transfer(total) {
        fetchTransfer({ asset, total, mode })
            .then(response =>  {
                const userAccount = response.userAccount;
                const responseStatus = response.transferStatus
                setStatus(MESSAGES[responseStatus]);
                setAccount(userAccount);
            })
            .catch(err => {
                const errorStatus = err.error;
                setStatus(MESSAGES[errorStatus]);
            });
    }

    return (
        <div className="wallet">
            <label className="transfer">
                <input
                    type="radio"
                    value='Deposit'
                    checked={mode === 'Deposit'}
                    onChange={(e) => setMode(e.target.value)}
                />
                Deposit
            </label>
            <label className="transfer">
                <input
                    type="radio"
                    value='Withdraw'
                    checked={mode === 'Withdraw'}
                    onChange={(e) => setMode(e.target.value)}
                />
                Withdraw
            </label>

            <div>
                <label>{mode ? `${mode}: ` : ''}</label>
                <select
                    onChange={(e) => setAsset(e.target.value)}
                >
                    <option value=''>Select an asset</option>
                    <option value='BTC'>BTC</option>
                    <option value='ETH'>ETH</option>
                    <option value='USDT'>USDT</option>
                    <option value='USD'>USD</option>
                </select>

                <form onSubmit={(e) => {
                    e.preventDefault();

                    transfer(total)
                    setTotal('')
                }}>
                    <div>
                        <label>To: </label>
                        <input
                            type="number"
                            min={0}
                            value={total}
                            onChange={(e) => setTotal(e.target.value)}
                            placeholder="Enter the total you want"
                        />
                    </div>

                    <div className="submit">
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

//Send Component
export function Send({ setAccount, setStatus }) {
    const [asset, setAsset] = useState('');
    const [total, setTotal] = useState('');
    const [receiver, setReceiver] = useState('');
  
    return (
      <div className="send">
        <span>Send: </span>
        <select 
          onChange={(e) => setAsset(e.target.value)}
        >
          <option>Select an asset</option>
          <option value='BTC'>BTC</option>
          <option value='ETH'>ETH</option>
          <option value='USDT'>USDT</option>
          <option value='USD'>USD</option>
        </select>
  
        <form onSubmit={(e) => {
          e.preventDefault();
  
          fetchSend({ asset, total, receiver })
          .then( response => {
            const userAccount = response.userAccount;
            const reponseStatus = response.sendStatus
            setStatus(MESSAGES[reponseStatus]);
            setAccount(userAccount);
          })
          .catch( err => {
            const errorStatus = err.error;
            setStatus(MESSAGES[errorStatus]);
          })
  
          setTotal('');
          setReceiver('');
        }}
        >
          <div>
            <label>
              <span>Total: </span>
              <input 
                type="number"
                min={0}
                value={total}
                onChange={(e) => setTotal(e.target.value)}
                placeholder="Enter the total"
              />
            </label>
          </div>
          
          
          <div>
            <label>
              <span>To: </span>
              <input
                value={receiver}
                onChange={(e) => setReceiver(e.target.value)}
                placeholder="Please enter the wallet you want to send"
              />
            </label>
          </div>
          
          <div className="submit">
            <button>Submit</button>
          </div>
        </form>
      </div>
    );
  }

  //Convert Component
  export function Convert({ setAccount, setStatus }) {
    const [fromAsset, setFromAsset] = useState('');
    const [toAsset, setToAsset] = useState('');
    const [total, setTotal] = useState('');
  
    const exchangeRateToUSD = {
      BTC: 30000,
      ETH: 2000,
      USDT: 1,
      USD: 1
    }
  
    return (
      <div>
        <div className="exchange-rate-container">
          Exchange rate:
          <div className="exchange-rate">
            {Object.keys(exchangeRateToUSD).map((asset, index) => (
              <div key={index} className="asset">1 {asset} = {exchangeRateToUSD[asset]} USD</div>
            ))}
          </div>
        </div>
  
        <form onSubmit={(e) => {
          e.preventDefault();
  
          fetchConvert({ fromAsset, toAsset, total, exchangeRateToUSD })
          .then( response => {
            const userAccount = response.userAccount;
            const convertStatus = response.convertStatus;
            setAccount(userAccount);
            setStatus(MESSAGES[convertStatus]);
          })
          .catch( err => {
            const errorStatus = err.error;
            setStatus(MESSAGES[errorStatus]);
          });
  
          setTotal('');
        }}
        >
          <div>
            <span>Convert: </span>
            <select 
              onChange={(e) => setFromAsset(e.target.value)}
            >
              <option>Select an asset</option>
              <option value='BTC'>BTC</option>
              <option value='ETH'>ETH</option>
              <option value='USDT'>USDT</option>
              <option value='USD'>USD</option>
            </select>
          </div>
          
          <span>Total: </span>
          <input
            type="number"
            min={0}
            placeholder="Please enter the total"
            value={total}
            onChange={(e) => setTotal(e.target.value)}
          />
          
          <div>
            <span>To: </span>
            <select 
              onChange={(e) => setToAsset(e.target.value)}
            >
              <option>Select an asset</option>
              <option value='BTC'>BTC</option>
              <option value='ETH'>ETH</option>
              <option value='USDT'>USDT</option>
              <option value='USD'>USD</option>
            </select>
          </div>
          <div className="submit">
            <button>Submit</button>
          </div>
        </form>
      </div>
    );
  }