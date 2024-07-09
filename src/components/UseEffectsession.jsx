import React, { useEffect, useState } from "react";
// import "src/style/UseEffectsession.css";

const UseEffectTimer = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date("2024-07-10T18:30:00"); 

    const updateTimer = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(intervalId); 
      }
    };

    const intervalId = setInterval(updateTimer, 1000);

    return () => clearInterval(intervalId); 
  }, []);

  return (
    <div>
      <h1>다음주 수요일 18시 30분까지 남은 시간</h1>
      <h2>{timeLeft.days}일 {timeLeft.hours}시간 {timeLeft.minutes}분 {timeLeft.seconds}초</h2>
    </div>
  );
};

export default UseEffectTimer;
