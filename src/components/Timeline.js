import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
      const timelineComponents = props.events.map((event) => {
        return(
          <TimelineEvent 
            person = {event.person}
            status = {event.status}
            timeStamp = {event.timeStamp} 
            key = {event.person} 
            />
        );
      });

    return (
      <div className = "timeline">
        {timelineComponents}
      </div >
    );
};

export default Timeline;