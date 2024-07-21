import { useState, useEffect, useCallback } from "react";

const useCountdownDay = (targetDate: any) => {
  console.log("TARGET", targetDate);

  const date = new Date(targetDate);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  const calculateDaysLeft = useCallback(() => {
    const currentDate = new Date();
    /*  const [day, month, year] = targetDate.split("/").map(Number); */
    const target = new Date(year, month - 1, day);

    const timeDiff = target - currentDate;
    const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    return daysLeft;
  }, [targetDate]);

  const [daysLeft, setDaysLeft] = useState(calculateDaysLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setDaysLeft(calculateDaysLeft());
    }, 1000 * 60 * 60 * 24); // Aggiorna una volta al giorno

    return () => clearInterval(timer);
  }, [targetDate, calculateDaysLeft]);

  return daysLeft;
};

export default useCountdownDay;
