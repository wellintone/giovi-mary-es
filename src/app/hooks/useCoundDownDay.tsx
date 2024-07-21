import { useState, useEffect, useCallback } from "react";

const useCountdownDay = (targetDate: any) => {
  const date = new Date(targetDate);
  const day = String(date.getDate()).padStart(2, "0") as any;
  const month = String(date.getMonth() + 1).padStart(2, "0") as any;
  const year = date.getFullYear() as any;

  const calculateDaysLeft = useCallback(() => {
    const currentDate = new Date() as any;
    /*  const [day, month, year] = targetDate.split("/").map(Number); */
    const target = new Date(year, month - 1, day) as any;

    const timeDiff = target - currentDate;
    const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    return daysLeft;
  }, [day, month, year]);

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
