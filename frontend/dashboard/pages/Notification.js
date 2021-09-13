import { render } from '@testing-library/react';
import React from 'react'
import News from './Dailyupdate'

export const Notification = () => {
  return (
    <div className='home'>
      <h1>Notification</h1>
    </div>
  );
};

export const Dailyupdate = () => {
  
  return (
    <div className='card'>
      <p>{News}</p>
      <News/>
    </div>
  );
};


export const Paymentreceipt = () => {
  return (
    <div className='home'>
      <h1>Payment Receipt</h1>
    </div>
  );
};

