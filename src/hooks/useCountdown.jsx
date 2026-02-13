import { useEffect, useState } from "react";

export const useCountdown = (targetDate) => {
    const [timePassed, setTimePassed] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        if (!targetDate) return;

        const interval = setInterval(() => {
            const now = Date.now();
            const target = new Date(targetDate).getTime();
            const diff = now - target; // 👈 главное изменение

            if (diff < 0) {
                // если дата ещё не наступила
                setTimePassed({
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                });
                return;
            }

            setTimePassed({
                days: Math.floor(diff / (1000 * 60 * 60 * 24)),
                hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((diff / (1000 * 60)) % 60),
                seconds: Math.floor((diff / 1000) % 60),
            });

        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    return timePassed;
};
