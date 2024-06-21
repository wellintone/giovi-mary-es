import { useState, useEffect } from "react";

const useCountdown2 = (endDate: any) => {
  const [timeLeft, setTimeLeft] = useState(endDate);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(endDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  /*  if (!timeLeft) {
    return <div>Il countdown è terminato!</div>;
  } */

  return calculateTimeLeft(endDate);
};

function calculateTimeLeft(endDate: any) {
  const now = new Date().getTime();
  const endDateTime = new Date(endDate).getTime();
  const timeLeft = endDateTime - now;

  /* if (timeLeft <= 0) {
    return null;
  } */

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
}

export { useCountdown2 };
