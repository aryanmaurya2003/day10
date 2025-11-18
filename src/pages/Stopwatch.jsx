import { useEffect, useState } from "react";

function Stopwatch() {
  const [time, setTime] = useState({
    hour: new Date().getHours(),
    minutes: new Date().getMinutes(),
    seconds: new Date().getSeconds(),
  });
  console.log(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(t => {
        let { hour, minutes, seconds } = t;

        seconds++;

        if (seconds === 60) {
          seconds = 0;
          minutes++;
        }

        if (minutes === 60) {
          minutes = 0;
          hour++;
        }

        if (hour === 24) {
          hour = 0;
        }

        return { hour, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="counterClass">
      <h1>
          {time.hour}:
          {time.minutes}:
          {time.seconds}
      </h1>
    </div>
  );
}

export default Stopwatch;
