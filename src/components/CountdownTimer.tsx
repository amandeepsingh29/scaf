import { useEffect, useState } from 'react';

const TARGET_DATE = new Date('2025-02-01T00:00:00Z');

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = TARGET_DATE.getTime() - now.getTime();

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4 text-center" role="timer" aria-label="Countdown to launch">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="flex flex-col">
          <span className="text-4xl md:text-6xl font-mono text-green-400 animate-pulse">
            {value.toString().padStart(2, '0')}
          </span>
          <span className="text-sm uppercase text-green-500/70">{unit}</span>
        </div>
      ))}
    </div>
  );
}