import React, {useState} from 'react';
import {formatDate} from '../util';

import './index.scss';
import ActivityDetails from './activity-details';

const ActivityTile = ({name, date, amount, type, details}) => {
  let [isExpanded, setIsExpanded] = useState(false);

  const expandDetails = () => {
    setIsExpanded(true);
  };

  const foldItem = () => {
    setIsExpanded(false);
  }

  return (
    <div className='ActivityTile'>
      <div className='Activity--Item Activity--Header'>
        <div className='Activity--Caption'>
          <div className='Activity--Name'>{name}</div>
          <div className='Activity--Date'>{formatDate(date)}</div>
        </div>
        <div className='Activity--AmountArea'>
          <div className={`Activity--Amount ${type === 1 ? 'Activity--Income' : 'Activity--Outcome'}`}>
            {amount}
          </div>
        </div>
      </div>
      {
        isExpanded && details &&
        <div className='Activity--Item'>
          <ActivityDetails type={type} details={details} />
        </div>
        // :
        // <div className='Activity--Item Activity--Amount'>
        //   <div className='Activity--AmountCaption'>花费金额：</div>
        //   <div className='Activity--AmountNumber'>{amount}</div>
        // </div>
      }
      <div className='Activity--Item Activity--Toolbar'>
        {
          !isExpanded ?
          <div
            className='Activity--LearnMore'
            onClick={expandDetails}>
            查看明细
          </div>
          :
          <div
            className='Activity--Fold'
            onClick={foldItem}>
            收起
          </div>
        }
      </div>
    </div>
  );
};

export default ActivityTile;
