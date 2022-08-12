import React from "react";
import "./Timer.css";

export default function Timer() {

  const CountDown = ({ days = 0, hours = 0, minutes = 0, seconds = 59 }) => {
    const [paused] = React.useState(false);
    const [over, setOver] = React.useState(false);
    const [[d, h, m, s], setTime] = React.useState([days, hours, minutes, seconds]);
  
    const tick = () => {
      if (paused || over) return;
      
      if (d === 0 && h === 0 && m === 0) {
        setOver(true);
      } else if (h === 0 && m === 0) {
        setTime([d - 1, 59, 59, 59]);
      } else if (m === 0 && s === 0) {
        setTime([d, h - 1, 59, 59]);
      }  else if (s === 0) {
        setTime([d, h, m - 1, 59]);
      } else {
        setTime([d, h, m, s - 1]);
      }
    };
  
  
  
    React.useEffect(() => {
      const timerID = setInterval(() => tick(), 1000);
      return () => clearInterval(timerID);
    });
  
    return (
      <div>
        <p className="timer">{`${d.toString().padStart(2, '0')}:${h
          .toString()
          .padStart(2, '0')}:${m.toString().padStart(2, '0')}`}</p>
          <div className="timer-text">
          <p>days</p>
          <p>hours</p>
          <p>minutes</p>
        </div>
      </div>
    );
  };

  return (
    <div className="Timer">
      <CountDown days={32} hours={6} minutes={25}/>
    </div>
  );
}
