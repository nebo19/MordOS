import React, { useEffect } from 'react';

const useDate = () => {
  const locale = 'en';
  const [today, setDate] = React.useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const day = today.toLocaleDateString(locale, { weekday: 'long' });
  const secondsNumber = today.getSeconds();

  const dayNumber = today.getDate();
  const monthNumber = today.getMonth() + 1;
  const yearNumber = today.getFullYear();

  const parseDayNumber = () => {
    switch (dayNumber) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  };

  const date = `${day}, ${dayNumber}${parseDayNumber()} ${today.toLocaleDateString(
    locale,
    {
      month: 'long',
    }
  )}`;

  const hour = today.getHours();
  const wish = `Good ${
    (hour < 12 && 'Morning') || (hour < 19 && 'Afternoon') || 'Evening'
  }, `;

  const timeFormat = today.toLocaleTimeString(locale, {
    hour: 'numeric',
    hour12: false,
    minute: 'numeric',
  });

  const time = `${timeFormat}`;

  const dateAndTime = `${yearNumber}-${
    monthNumber < 10 ? '0' + monthNumber : monthNumber
  }-${dayNumber < 10 ? '0' + dayNumber : dayNumber} ${time}:${
    secondsNumber < 10 ? '0' + secondsNumber : secondsNumber
  }`;

  return {
    date,
    time,
    wish,
    dateAndTime,
  };
};

export default useDate;
