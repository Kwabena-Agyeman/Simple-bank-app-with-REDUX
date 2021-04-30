import React, { Component } from 'react';
import formatNumber from 'format-number';
import photographer from './images/girl.png';
import './App.css';
import store from './store/index';
import { setWithdrawalAmount } from './actions';

class App extends Component {
  withdrawMoney = (e) => {
    const amount = e.target.getAttribute('data-amount');
    store.dispatch(setWithdrawalAmount(Number(amount)));
  };

  render() {
    const { totalAmount, username } = store.getState();
    return (
      <div className='App'>
        <img className='App__userpic' src={photographer} alt='user' />
        <p className='App__username'>Hello, {username}! </p>
        <div className='App__amount'>
          {formatNumber({ prefix: '$' })(totalAmount)}
          <p className='App__amount--info'>Total Amount</p>
        </div>

        <section className='App__buttons'>
          <button data-amount='10000' onClick={this.withdrawMoney}>
            WITHDRAW $10,000
          </button>
          <button data-amount='5000' onClick={this.withdrawMoney}>
            WITHDRAW $5,000
          </button>
        </section>
      </div>
    );
  }
}

export default App;
