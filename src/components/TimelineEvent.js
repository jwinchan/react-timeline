import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  return (
    <div className = "TimelineEvent">
      <h4>{props.person}   <Timestamp time ={props.timeStamp} /></h4>
      <p>{props.status}</p>
    </div>
  );
}

export default TimelineEvent;