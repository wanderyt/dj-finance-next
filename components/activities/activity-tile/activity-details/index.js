import React from 'react';

import './index.scss';

const ActivityDetails = ({type, details}) => {
  return (
    <div className='ActivityDetails'>
      {
        type === 2 &&
        <div className='Activity--Items'>
          {
            details.items.map((item) => (
              <div className='AmountItem'>
                <div className='AmountName'>{item.name}</div>
                <div className='Amount'>{item.number} x {item.price} = {item.number * item.price}</div>
              </div>
            ))
          }
          <div className='Activity--Total'>
            <div className='Activity--TotalAmountCaption'>总计</div>
            <div className='Activity--TotalAmount'>{details.total}</div>
          </div>
        </div>
      }
      {
        type === 1 &&
        <div className='Activity--Items'>
          <div className='AmountItem'>
            <div className='Amount'>{details.number} x {details.price} = {details.number * details.price}</div>
          </div>
          <div className='Activity--Total'>
            <div className='Activity--TotalAmountCaption'>总计</div>
            <div className='Activity--TotalAmount'>{details.total}</div>
          </div>
        </div>
      }
    </div>
  );
};

export default ActivityDetails;
