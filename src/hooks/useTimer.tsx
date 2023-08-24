import { useRef, useState } from "react";

export const useTimer = () => {
  const [second, setSecond] = useState<string>("00");
  const [min, setMin] = useState<string>("00");
  const [hour, setHour] = useState<string>("00");
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const timerRef = useRef<number | null>(null);

  const startTime = () => {
    setIsRunning(true);
    if (!isRunning) {
      let secondOnePlace = Number(second.slice(1, 2));
      let secondTenPlace = Number(second.slice(0, 1));
      let minOnePlace = Number(min.slice(1, 2));
      let minTenPlace = Number(min.slice(0, 1));
      let hourOnePlace = Number(hour.slice(1, 2));
      let hourTenPlace = Number(hour.slice(0, 1));

      timerRef.current = window.setInterval(() => {
        if (`${secondTenPlace}${secondOnePlace}` < "59") {
          secondOnePlace++;
          if (secondOnePlace > 9) {
            secondTenPlace++;
            secondOnePlace = 0;
          }
        } else if (`${secondTenPlace}${secondOnePlace}` === "59") {
          secondTenPlace = 0;
          secondOnePlace = 0;
          minOnePlace++;
          if (minOnePlace > 9) {
            minTenPlace++;
            minOnePlace = 0;
          }
        }
        if (`${minTenPlace}${minOnePlace}` > "59") {
          minTenPlace = 0;
          minOnePlace = 0;
          hourOnePlace++;
          if (hourOnePlace > 9) {
            hourTenPlace++;
            hourOnePlace = 0;
          }
        }
        setSecond(`${secondTenPlace}${secondOnePlace}`);
        setMin(`${minTenPlace}${minOnePlace}`);
        setHour(`${hourTenPlace}${hourOnePlace}`);
      }, 1000);
    }
  };

  const stopTime = () => {
    setIsRunning(false);
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const resetTime = () => {
    stopTime();
    setSecond("00");
    setMin("00");
    setHour("00");
  };
  return { second, min, hour, startTime, stopTime, resetTime };
};
