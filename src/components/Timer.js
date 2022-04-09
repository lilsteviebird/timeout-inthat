import React, { useEffect, useState } from 'react';


const Timer = (props) =>{
    const calculateTimeLeft = () =>{


        const cardDate = new Date(props.cardDate);
        let endTimer = new Date(props.cardDate);

        endTimer.setDate(endTimer.getDate() + parseInt(props.cardDay));
        endTimer.setTime(endTimer.getTime() + (props.cardHour*60*60*1000));

        const difference = +endTimer - +cardDate;

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
            };
        }
        
        return timeLeft;

    }

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    useEffect(() => {
        const timer = setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
          return;
        }
      
        timerComponents.push(
          <span>
            {timeLeft[interval]} {interval}{" "}
          </span>
        );
      });

    return (
        <div>
          {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </div>
    );

}

export default Timer;