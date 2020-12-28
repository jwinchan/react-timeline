import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  return (
    <div className = "TimelineEvent">
      <h2>{props.person}</h2>
      <p>{props.status}</p>
      <p><Timestamp time ={props.timeStamp} /></p>
    </div>
  );
}

export default TimelineEvent;